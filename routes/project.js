const express = require('express');
const mongoose = require('mongoose');
const _ = require("lodash");
const router = express.Router();
// const config = require('../config/database');
const Project = require('../models/project');

let sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//PROJECTS END POINTS
/*GET ALL Projects*/
router.get('/', function (req, res) {
    if (req.params) {
        const userGuid = req.query.guid;
        Project
            .find({ creator: userGuid }, 'title creator creatorEmail updated_date date_create team_project brows_team_project', function (err, projects) {
                if (err) {
                    const error = err;
                    sendJSONresponse(res, 404, {
                        'message': error.message
                    });
                } else {
                    sendJSONresponse(res, 200, projects);
                }
            });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No projects in request"
        });
    }
});
/*GET Project BY creator email*/
/*
router.delete('/:creatorEmail', function (req, res) {
    if(req.params.creatorEmail) {
        const userEmail = req.params.creatorEmail;
        Project
            .find({ creator: userEmail }, function (err, project) {
                if (err) {
                    sendJSONresponse(res, 404, {
                        "message": "No projects in request"
                    });
                } else {
                    let projectsList = project;
                    for( let i = 0; i<projectsList.length; ++i) {
                        let itemProject = projectsList[i];
                        Project.findByIdAndRemove(itemProject.id, function (err) {
                            if (err) {
                                sendJSONresponse(res, 418, {
                                    "message": "Some problem with delete projects"
                                });
                            }
                        });
                    }
                    res.json({ success: true, msg: 'User projects was deleted' });
                }
            });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No projects in request"
        });
    }
});
*/
/*Get All team work project*/
router.get('/team-project', function (req, res) {
    if (req.params) {
        const userGuidForTeam = req.query.guid;
        Project.find({ 'team_project.guid': userGuidForTeam }, 'title creator updated_date date_create team_project brows_team_project creatorEmail', function (err, project) {
        // Project.find({ userGuidForTeam: {$in: team_project.guid} } , 'title creator updated_date date_create team_project brows_team_project', function (err, project) {
            if (err) {
                sendJSONresponse(res, 404, {
                    "message": err.message
                })
            } else {
                sendJSONresponse(res, 200, project);
            }
        });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No project in team space"
        });
    }
});
/*Get ALL browsing project*/
router.get('/browsing-project', function (req, res) {
    if (req.params) {
        const userGuidForViewProjects = req.query.guid;
        Project.find({ 'brows_team_project.guid': userGuidForViewProjects }, 'title creator updated_date date_create team_project brows_team_project creatorEmail', function (err, project) {
            if (err)
                res.send(err);
            res.json(project);
        });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No project in team space"
        });
    }
});
//
router.get('/:id/project-community', function(req, res) {
    if (req.params.id) {
        const projectId = req.params.id;
        Project.findById(projectId, 'creator team_project brows_team_project creatorEmail', function (err, project) {
            if(err) {
                res.send(err);
            } else {
                res.json(project);
            }
        });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No project in team space"
        });
    }
});
//
router.get('/creating-project', function (req, res) {
    if (req.params) {
        const creator = req.query.email;
        Project.find({ creator: creator }, 'title creator updated_date date_create team_project brows_team_project', function (err, project) {
            if (err)
                res.send(err);
            res.json(project);
        });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No one project has creator"
        });
    }
});
/*CREATE Project*/
router.post('/project-create', (req, res) => {
    if(req.params) {
        let newProject = new Project({
            title: req.body.title,
            date_create: req.body.date_create,
            updated_date: req.body.updated_date,
            creator: req.body.creator,
            creatorEmail: req.body.creatorEmail
        });
        Project.addProject(newProject, (err) => {
            if (err) {
                sendJSONresponse(res, 404, {
                    "message": err.message
                });
            } else {
                sendJSONresponse(res, 201, {
                    "status": "success"
                });
            }
        });
    } else {
        sendJSONresponse(res, 400, {
            "message": "Some problem with request params, please check parametrs from client side service"
        });
    }
});
/**
 * create-project-copy
*/
// TODO: move req.body to variable
router.post('/create-project-copy', (req, res) => {
    if(req.params) {
        const projectId = req.body._id;
        const projectName = req.body.name;
        Project.findById(projectId).exec(
            function(err, copiedProject) {
                if(req.body.guid !== req.body.creator){
                    copiedProject.creator = req.body.guid;
                    for(let i=0; i<copiedProject.team_project.length; ++i) {
                        let teamItemUser = copiedProject.team_project[i];
                        if(req.body.guid === teamItemUser.guid) {
                            copiedProject.team_project.splice(i, 1);
                        }
                    }
                }
                copiedProject._id = mongoose.Types.ObjectId();
                copiedProject.title = projectName;
                copiedProject.isNew = true;
                Project.addProject(copiedProject, (err) => {
                    if (err) {
                        sendJSONresponse(res, 404, {
                            "message": err.message
                        });
                    }
                    sendJSONresponse(res, 201, {
                        "status": "created",
                        "project": {
                            creator: copiedProject.creator,
                            creatorEmail: copiedProject.creatorEmail,
                            _id: copiedProject._id,
                            title: copiedProject.title
                        }
                    });
                })
            }
        );
    } else {
        sendJSONresponse(res, 400, {
            "message": "Some problem with request params, please check parametrs from client side service"
        })
    }
});

/*UPDATE Project*/
router.put('/:id', function (req, res) {
    if (req.params.id) {
        Project.findByIdAndUpdate(req.params.id, req.body, function (err) {
            if (err) {
                sendJSONresponse(res, 404, {
                    "message": err.message
                })
            } else {
                sendJSONresponse(res, 200, {
                    "status": "success"
                })
            }
        });
    } else {
        sendJSONresponse(res, 400, {
            "message": "Some problem with request params, please check parametrs from client side service"
        });
    }
});
/* DELETE Project */
router.delete('/:id', function (req, res) {
    if (req.params.id) {
        Project.findByIdAndRemove(req.params.id, req.body, function (err) {
            if (err) {
                sendJSONresponse(res, 404, {
                    "message": err.message
                });
            } else {
                sendJSONresponse(res, 200, {
                    "status": "success"
                });
            }
        });
    } else {
        sendJSONresponse(res, 400, {
            "message": "Some problem with request params, please check parametrs from client side service"
        });
    }
});
/*GET Item Project*/
router.get('/:id', function (req, res) {
    if (req.params && req.params.id) {
        Project
            .findById(req.params.id)
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: true, msg: 'Get item project' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get project' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get project' });
    }
});
/*GET Item project Name*/
router.get('/project-name/:id', function (req, res) {
    if (req.params && req.params.id) {
        Project
            .findById(req.params.id)
            .select('title')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: true, msg: 'Get item project' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get project' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get project' });
    }
});

//ELECTRICALS END POINT
/*GET SINGLE ELECTRICALS-ITEM BY ID FOR EXCELL insert cabels*/
router.get('/:id/electrical-item/:electricalid', function (req, res) {
    if (req.params && req.params.id && req.params.electricalid) {
        Project
            .findById(req.params.id)
            .select('electricals')
            .exec(
                function (err, project) {
                    var response, electrical;
                    var electricalItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                        return;
                    }
                    if (project.electricals && project.electricals.length > 0) {
                        electrical = project.electricals.id(req.params.electricalid);
                        electricalItem['ITEM NUMBER'] = electrical.itemNumber || 'N/A';
                        electricalItem['DATE ADDED'] = electrical.dateCreate || 'N/A';
                        electricalItem['REVISION'] = electrical.revision || 'N/A';
                        electricalItem['QUANTITY'] = electrical.quantity || 'N/A';
                        electricalItem['EQUIPMENT TYPE'] = electrical.selectedEquipmentType || 'N/A';
                        electricalItem['PID DRAWING'] = electrical.selectedPidDrawing || 'N/A';
                        electricalItem['LAYOUT DRAWING'] = electrical.selectedLayoutDrawing || 'N/A';
                        electricalItem['SLD DRAWING'] = electrical.selectedSldDraving || 'N/A';
                        electricalItem['EQUIPMENT TAG'] = electrical.equipmentTag || 'N/A';
                        electricalItem['EQUIPMENT TAG 2'] = 'N/A';
                        electricalItem['PARENT TAG'] = electrical.selectedParentTag || 'N/A';
                        electricalItem['EQUIPMENT NOTES'] = electrical.equipmentNotes || 'N/A';
                        electricalItem['LOCATION/AREA'] = electrical.selectedLocationArea || 'N/A';
                        electricalItem['EQUIPMENT DESCRIPTION'] = electrical.selectedEquipmentDescription || 'N/A';
                        electricalItem['CLONE TAG'] = 'N/A';
                        electricalItem['LENGTH(mm)'] = electrical.length || 'N/A';
                        electricalItem['DEPTH(mm)'] = electrical.depth || 'N/A';
                        electricalItem['HEIGHT(mm)'] = electrical.height || 'N/A';
                        electricalItem['X COORD(m)'] = electrical.coordForX || 'N/A';
                        electricalItem['Y COORD(m)'] = electrical.coordForY || 'N/A';
                        electricalItem['Z COORD(m)'] = electrical.coordForZ || 'N/A';
                        electricalItem['SCENARIO 1 LOAD FACTOR %'] = electrical.scenarioFirstLoadFactor || 'N/A';
                        electricalItem['HEAT DOSSIPATION (W)'] = 'N/A';
                        electricalItem['POWER SYSTEM'] = electrical.selectedPowerSystem || 'N/A';
                        electricalItem['VOLTAGE'] = electrical.selectedVoltage.name || 'N/A';
                        electricalItem['TOTAL % P.F.'] = electrical.totalPF || 'N/A';
                        electricalItem['TOTAL % EFF.'] = electrical.totalEFF || 'N/A';
                        electricalItem['NAMEPLATE RATING'] = electrical.nameplateRating || 'N/A';
                        electricalItem['UNITS'] = electrical.selectedUnits || 'N/A';
                        electricalItem['MOTOR S.F.'] = electrical.selectedMotorSF || 'N/A';
                        electricalItem['MOTOR CODE'] = electrical.selectedMotorCode || 'N/A';
                        electricalItem['SCC RATING'] = electrical.selectedSccRating || 'N/A';
                        electricalItem['ENCLOSURE RATING'] = electrical.selectedEnclosureRating || 'N/A';
                        electricalItem['LOAD FACTOR (%)'] = electrical.loadFactor || 'N/A';
                        electricalItem['LOAD DUTY'] = electrical.selectedLoadDuty || 'N/A';
                        electricalItem['AMBIENT TEMP (°C)'] = electrical.ambientTemp || 'N/A';
                        electricalItem['TERMINATION TEMP (°C)'] = electrical.selectedTerminationTemp || 'N/A';
                        electricalItem['OPERATING T MIN. (°C)'] = electrical.operationTempMin || 'N/A';
                        electricalItem['OPERATING T MAX. (°C)'] = electrical.operationTempMax || 'N/A';
                        electricalItem['INSUL. DESIGNATION'] = electrical.selectedInsulDescription || 'N/A';
                        electricalItem['HAZLOC CLASS'] = electrical.selectedHazlocClass || 'N/A';
                        electricalItem['HAZLOC ZONE'] = electrical.selectedHazlocZone || 'N/A';
                        electricalItem['HAZLOC GROUP'] = electrical.selectedHazlocGroup || 'N/A';
                        electricalItem['HAZLOC TEMPERATURE'] = electrical.selectedHazlocTemperature || 'N/A';
                        if (!electrical) {
                            res.json({ success: false, msg: 'Failed get electrical item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                electricalItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});
/* GET ALL Electricals */
router.get('/:id/electricals', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'creator creatorEmail electricals._id electricals.isChecked electricals.dateCreate electricals.revision electricals.equipmentTag electricals.equipmentTag2 ' +
                'electricals.selectedEquipmentType electricals.selectedVoltage ' +
                'electricals.selectedPowerSystem electricals.nameplateRating electricals.selectedUnits electricals.totalPF electricals.totalEFF electricals.selectedMotorSF ' +
                'electricals.selectedMotorCode electricals.selectedLoadDuty electricals.selectedParentTag electricals.totalConectedFla electricals.totalConectedKW ' +
                'electricals.totalConnectedKVAR electricals.totalConnectedKVA electricals.totalDemandFLA electricals.totalDemandKW electricals.totalDemandKVAR electricals.totalDemandKVA ' +
                'electricals.scenarioFirstFLA electricals.scenarioFirstKW electricals.scenarioFirstKVAR electricals.scenarioFirstKVA electricals.loadFactor electricals.scenarioFirstLoadFactor ' +
                'electricals.chiildList')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});
router.get('/:id/electrical', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'electricals.equipmentTag electricals.totalConectedFla electricals.coordForX electricals.coordForY electricals.coordForZ')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});
router.get('/:id/electrical-for-sld', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'electricals.equipmentTag electricals.selectedEquipmentDescription electricals.selectedVoltage')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});
/* GET SINGLE Electrical BY ID */
router.get('/:id/electricals/:electricalid', function (req, res) {
    if (req.params && req.params.id && req.params.electricalid) {
        Project
            .findById(req.params.id)
            .select('electricals')
            .exec(
                function (err, project) {
                    var response, electrical;
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                        return;
                    }
                    if (project.electricals && project.electricals.length > 0) {
                        electrical = project.electricals.id(req.params.electricalid);
                        if (!electrical) {
                            res.json({ success: false, msg: 'Failed get electrical item' });
                        } else {
                            response = {
                                electrical
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});
/* CREATE NEW Electrical */
router.post('/:id/electrical-create', function(req, res) {
    if (req.params && req.params.id) {
        const newElectrical = req.body;
        Project
        .findById(req.params.id)
        .select('electricals')
        .exec(
          function(err, project) {
            if (err) {
                sendJSONresponse(res, 400, {
                    "message": "Failed get electrical item"
                });
            } else {
              if (!project) {
                    sendJSONresponse(res, 400, {
                        "message": "Unable to find a project with this id"
                    });
              } else {
                project.electricals.push(newElectrical);
                project.save(function(err) {
                if (err) {
                    sendJSONresponse(res, 400, {
                        "message": err
                    });
                } else {
                    sendJSONresponse(res, 201, {
                        "electricals": project.electricals
                    });
                }
            });
          }
        }
      });
    } else {
        sendJSONresponse(res, 404, {
            "message": "No projects in request"
        });
    }
});
/* UPDATE Electrical*/
router.patch('/:id/electrical-update/:electricalid', function (req, res) {
    if (req.params && req.params.id && req.params.electricalid) {
        const userGuid = req.query.guid;
        const projectId = req.params.id;
        const electricalId = req.params.electricalid;
        const electricalData = req.body;
        Project
            .find({ creator: userGuid })
            .exec( function (err, project) {
                if (err) {
                    console.error(err);
                } else {
                    for( let i = 0; i < project.length; ++i) {
                        let itemProject = project[i];
                        if(itemProject.id === projectId) {
                            for(let k = 0; k<itemProject.electricals.length; ++k){
                                let itemElectrical = itemProject.electricals[k];
                                if(itemElectrical.id === electricalId) {
                                    project[i].electricals[k] = electricalData;
                                    let temp = project[i];
                                    project[i].save(function (err, updatedItem) {
                                        if (err) {
                                            console.error(err.stack);
                                            sendJSONresponse(res, 404, err);
                                        } else {
                                            sendJSONresponse(res, 200, updatedItem);
                                       }
                                    });
                                }
                            }
                        }
                    }
                }
            });
    } else {
        sendJSONresponse(res, 404, {
            "message": "Not found, project or electrical id"
        });
        return;
    }
});
/* DELETE Electrical by ID*/
router.delete('/:id/electricals/:electricalid', function (req, res) {
    if (!req.params && !req.params.id && !req.params.electricalid) {
        res.json({ success: false, msg: 'Failed params' });
        return;
    }
    Project
        .findById(req.params.id)
        .select('electricals')
        .exec(
            function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed delete project item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Error' });
                    return;
                }
                if (project.electricals && project.electricals.length > 0) {
                    project.electricals.id(req.params.electricalid).remove();
                    project.save(function (err) {
                        if (err) {
                            res.json({ success: false, msg: 'Failed get electrical item' });
                        } else {
                            sendJSONresponse(res, 204, null);
                        }
                    });
                } else {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                }
            }
        );
});
//CABLES
/*GET SINGLE CABLE-ITEM BY ID FOR EXCELL insert cabels*/
router.get('/:id/cable-item/:cabelId', function (req, res) {
    if (req.params && req.params.id && req.params.cabelId) {
        Project
            .findById(req.params.id)
            .select('cabels')
            .exec(
                function (err, project) {
                    var response, cable;
                    var cableItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get cable item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get cable item' });
                        return;
                    }
                    if (project.cabels && project.cabels.length > 0) {
                        cable = project.cabels.id(req.params.cabelId);
                        cableItem['CABLE CONDUIT TAG'] = 'N/A';
                        cableItem['CABLE FROM'] = cable.selectedCableFrom || 'N/A';
                        cableItem['CABLE TO'] = cable.selectedCableTo || 'N/A';
                        cableItem['SYSTEM'] = cable.selectedPowerSystem || 'N/A';
                        cableItem['CONDUCTOR MATERIAL'] = cable.selectedConductorMaterial.name || 'N/A';
                        cableItem['CIRCUIT VOLTAGE'] = cable.selectedVoltage.name || 'N/A';
                        cableItem['SERVICE'] = cable.selectedService || 'N/A';
                        cableItem['MAX. AMB. TEMP.'] = cable.selectedMaxAmbientTemp || 'N/A';
                        cableItem['CABLE TYPE'] = cable.selectedCableType || 'N/A';
                        cableItem['INSULATION VOLTAGE'] = cable.selectedInsulationVoltage || 'N/A';
                        cableItem['INS. RATING'] = cable.selectedInsulationRating || 'N/A';
                        cableItem['CONDUCTOR INS. TYPE'] = cable.selectedConductorInsulationType || 'N/A';
                        cableItem['INS. TEMP. RATING'] = cable.selectedInsulationTemperatureRating.name || 'N/A';
                        cableItem['SHIELD'] = cable.selectedShield || 'N/A';
                        cableItem['ARMOUR'] = cable.selectedArmour || 'N/A';
                        cableItem['KG/M'] = cable.kgPerMetr || 'N/A';;
                        cableItem['OUT JACKET'] = cable.outJacket || 'N/A';
                        cableItem['JACKET COLOR'] = cable.selectedJacketColor || 'N/A';
                        cableItem['RACEWAY'] = cable.selectedRaceway || 'N/A';
                        cableItem['FT. RATING'] = cable.selectedFtRating || 'N/A';
                        cableItem['WIRE COLOR'] = cable.selectedWireColor || 'N/A';
                        cableItem['APPROVAL'] = cable.selectedApproval || 'N/A';
                        cableItem['O.D.'] = cable.od || 'N/A';
                        cableItem['No'] = cable.itemNum || 'N/A';
                        cableItem['TYPE'] = cable.selectedItemType || 'N/A';
                        cableItem['SIZE'] = cable.selectedCableSize || 'N/A';
                        cableItem['INSTALL METHOD'] = cable.selectedInstallMethod || 'N/A';
                        cableItem['SPACING'] = cable.selectedSpacing || 'N/A';
                        cableItem['SPACING CORRECTION'] = cable.selectedSpacingCorrection || 'N/A';
                        cableItem['TEMP. CORRECTION'] = cable.tempCorrection || 'N/A';
                        cableItem['CEC 28-104'] = cable.selectedCec || 'N/A';
                        cableItem['CORRECTED COND. AMP.'] = cable.correctedCondAmp || 'N/A';
                        cableItem['NO. OF RUNS PER PHASE'] = cable.numberOfRunsPerPhase || 'N/A';
                        cableItem['FEEDER AMPACITY'] = cable.feederAmpacity || 'N/A';
                        cableItem['TOTAL LENGTH'] = cable.cableLenth || 'N/A';
                        cableItem['VOLTAGE DROP (%)'] = cable.voltageDropPercent || 'N/A';
                        cableItem['CONNECTED FLA'] = cable.connectedFLA || 'N/A';
                        cableItem['AMPACITY MULTIPLIER'] = cable.selectedAmpacityMultiplier || 'N/A';
                        cableItem['MIN. COND. AMP.'] = cable.minCondAmp || 'N/A';
                        cableItem['COND. AMPACITY'] = cable.condAmpacity || 'N/A';
                        cableItem['O/C AMP RATING'] = cable.ocAmpRating || 'N/A';
                        cableItem['INTERNAL NOTES'] = cable.internalNotes || 'N/A';
                        if (!cable) {
                            res.json({ success: false, msg: 'Failed get cable item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                cableItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get cable item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get cable item' });
    }
});
//GET CONTROLLER-SHEDULE for EXPORT TO EXCEL
router.get('/:id/cable-item-list/:cabelId', function (req, res) {
    if (req.params && req.params.id && req.params.cabelId) {
        Project
            .findById(req.params.id)
            .select('cabels')
            .exec(
                function (err, project) {
                    var response, cable;
                    var cableItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get cable item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get cable item' });
                        return;
                    }
                    if (project.cabels && project.cabels.length > 0) {
                        cable = project.cabels.id(req.params.cabelId);
                        cableItem['REV.'] = 'N/A';
                        cableItem['CABLE CONDUIT TAG'] = 'N/A';
                        cableItem['SERVICE'] = cable.selectedService || 'N/A';
                        cableItem['LOAD(A)'] = 'N/A';
                        cableItem['VOLTS'] = cable.selectedVoltage.name || 'N/A';
                        cableItem['FROM SOURCE'] = cable.selectedCableFrom || 'N/A';
                        cableItem['TO DESTINATION'] = cable.selectedCableTo || 'N/A';
                        cableItem['CABLE/CONDUIT TYPE'] = cable.selectedCableType || 'N/A';
                        cableItem['LENGTH'] = 'N/A';
                        cableItem['NO OF COND.'] = cable.itemNum || 'N/A';
                        cableItem['TYPE OF COND.'] = cable.selectedItemType || 'N/A';
                        cableItem['SIZE (AWG)'] = 'N/A';
                        cableItem['INSUL'] = cable.selectedConductorInsulationType || 'N/A';
                        cableItem['INSUL VOLTS'] = cable.selectedInsulationVoltage || 'N/A';
                        cableItem['SPARE'] = 'N/A';
                        cableItem['COMPONENTS/RACEWAY/NUMBERS'] = 'N/A';;
                        if (!cable) {
                            res.json({ success: false, msg: 'Failed get cable item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                cableItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get cable item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get cable item' });
    }
});
/* GET ALL Cabels */
router.get('/:id/cables', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'cabels._id cabels.isChecked cabels.cableTagFirst cabels.cableTagSecond cabels.cableTagThird cabels.cableTagFourth cabels.selectedCableTagIndex ' +
                'cabels.selectedService cabels.selectedVoltage cabels.selectedCableType cabels.itemNum cabels.selectedCableFrom cabels.selectedCableTo cabels.cableLenth ' +
                'cabels.itemNum cabels.selectedItemType cabels.selectedCableSize cabels.selectedConductorInsulationType cables.selectedInsulationVoltage')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});
/* CREATE NEW Cable */
router.post('/:id/cable-create', function (req, res) {
    if (req.params.id) {
        Project
            .findById(req.params.id)
            .select('cabels')
            .exec(
                function (err, project) {
                    if (err) {
                        res.json({ success: false, msg: 'Failed get cabel item' });
                    } else {
                        if (!project) {
                            res.json({ success: false, msg: 'Failed get cabel item' });
                        } else {
                            project.cabels.push({});
                            project.save(function (err, project) {
                                if (err) {
                                    res.json({ success: false, msg: 'Failed get cabel item' });
                                } else {
                                    res.json(project.cabels);
                                }
                            });
                        }
                    }
                });
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});

/* GET SINGLE Cable BY ID */
router.get('/:id/cables/:cableId', function (req, res) {
    if (req.params && req.params.id && req.params.cableId) {
        Project
            .findById(req.params.id)
            .select('cabels')
            .exec(
                function (err, project) {
                    var response, cabel;
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                        return;
                    }
                    if (project.cabels && project.cabels.length > 0) {
                        cabel = project.cabels.id(req.params.cableId);
                        if (!cabel) {
                            res.json({ success: false, msg: 'Failed get electrical item' });
                        } else {
                            response = {
                                cabel
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get electrical item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get electrical item' });
    }
});

/* UPDATE Item Cabel*/
router.patch('/:id/cable-update/:cabelId', function (req, res) {
    if (req.params && req.params.id && req.params.cabelId) {
        Project
            .findById(req.params.id)
            .exec(
                function (err, project) {
                    var response, cabel;
                    cabel = project.cabels.id(req.params.cabelId);
                    //Info part
                    cabel.cableTagFirst = req.body.cableTagFirst;
                    cabel.cableTagSecond = req.body.cableTagSecond;
                    cabel.cableTagThird = req.body.cableTagThird;
                    cabel.cableTagFourth = req.body.cableTagFourth;
                    cabel.cableTagIndex = req.body.cableTagIndex;
                    cabel.selectedCableTagIndex = req.body.selectedCableTagIndex;
                    cabel.selectedCableFrom = req.body.selectedCableFrom;
                    cabel.selectedCableTo = req.body.selectedCableTo;
                    cabel.selectedPowerSystem = req.body.selectedPowerSystem;
                    cabel.selectedConductorMaterial = req.body.selectedConductorMaterial;
                    cabel.selectedVoltage = req.body.selectedVoltage;
                    cabel.selectedService = req.body.selectedService;
                    cabel.selectedMaxAmbientTemp = req.body.selectedMaxAmbientTemp;
                    //Physical part
                    cabel.selectedCableType = req.body.selectedCableType;
                    cabel.selectedInsulationVoltage = req.body.selectedInsulationVoltage;
                    cabel.outJacket = req.body.outJacket;
                    cabel.selectedJacketColor = req.body.selectedJacketColor;
                    cabel.selectedInsulationRating = req.body.selectedInsulationRating;
                    cabel.selectedRaceway = req.body.selectedRaceway;
                    cabel.selectedConductorInsulationType = req.body.selectedConductorInsulationType;
                    cabel.selectedFtRating = req.body.selectedFtRating;
                    cabel.selectedInsulationTemperatureRating = req.body.selectedInsulationTemperatureRating;
                    cabel.selectedWireColor = req.body.selectedWireColor;
                    cabel.selectedShield = req.body.selectedShield;
                    cabel.selectedApproval = req.body.selectedApproval;
                    cabel.selectedArmour = req.body.selectedArmour;
                    cabel.od = req.body.od;
                    cabel.kgPerMetr = req.body.kgPerMetr;
                    cabel.itemNum = req.body.itemNum;
                    cabel.selectedItemType = req.body.selectedItemType;
                    cabel.selectedCableSize = req.body.selectedCableSize;
                    //Configuration part
                    cabel.selectedInstallMethod = req.body.selectedInstallMethod;
                    cabel.selectedSpacing = req.body.selectedSpacing;
                    cabel.selectedSpacingCorrection = req.body.selectedSpacingCorrection;
                    cabel.tempCorrection = req.body.tempCorrection;
                    cabel.selectedCec = req.body.selectedCec;
                    cabel.correctedCondAmp = req.body.correctedCondAmp;
                    cabel.numberOfRunsPerPhase = req.body.numberOfRunsPerPhase;
                    cabel.feederAmpacity = req.body.feederAmpacity;
                    //Voltage Drop part
                    cabel.cableLenth = req.body.cableLenth;
                    cabel.voltageDropPercent = req.body.voltageDropPercent;
                    //Load part
                    //cabel.connectedFLA = req.body.connectedFLA;                       пересмотреть
                    cabel.selectedAmpacityMultiplier = req.body.selectedAmpacityMultiplier;
                    cabel.minCondAmp = req.body.minCondAmp;
                    cabel.condAmpacity = req.body.condAmpacity;
                    cabel.ocAmpRating = req.body.ocAmpRating;
                    cabel.internalNotes = req.body.internalNotes;
                    project.save(function (err, cabel) {
                        if (err) {
                            sendJSONresponse(res, 404, err);
                        } else {
                            sendJSONresponse(res, 200, project);
                        }
                    });
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "Not found, project or electrical id"
        });
        return;
    }
});

/* DELETE Cable by ID*/
router.delete('/:id/cables/:cableId', function (req, res) {
    if (!req.params && !req.params.id && !req.params.cableId) {
        res.json({ success: false, msg: 'Failed params' });
        return;
    }
    Project
        .findById(req.params.id)
        .select('cabels')
        .exec(
            function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed delete project item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Error' });
                    return;
                }
                if (project.cabels && project.cabels.length > 0) {
                    project.cabels.id(req.params.cableId).remove();
                    project.save(function (err) {
                        if (err) {
                            res.json({ success: false, msg: 'Failed get electrical item' });
                        } else {
                            sendJSONresponse(res, 204, null);
                        }
                    });
                } else {
                    res.json({ success: false, msg: 'Failed get electrical item' });
                }
            }
        );
});

//SLD-SCHEDULE
//
/*GET SINGLE SLD-SHEDULE-ITEM BY ID FOR EXCELL insert controller*/
router.get('/:id/sldshedule-item/:sldscheduleId', function (req, res) {
    if (req.params && req.params.id && req.params.sldscheduleId) {
        Project
            .findById(req.params.id)
            .select('sldschedules')
            .exec(
                function (err, project) {
                    var response, sldshedule;
                    var sldsheduleItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get sld-shedule item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get sld-shedule item' });
                        return;
                    }
                    if (project.sldschedules && project.sldschedules.length > 0) {
                        sldshedule = project.sldschedules.id(req.params.sldscheduleId);
                        sldsheduleItem['MAJOR EQUIPMENT DEVICE'] = sldshedule.selectedMajorEquipmentDevice || 'N/A';
                        sldsheduleItem['EQUIPMENT DESCRIPTION'] = sldshedule.selectedEquipmentDescriptionForMajorEquipmentDevice || 'N/A';
                        sldsheduleItem['MAJOR EQUIPMENT TAG'] = sldshedule.selectedMajorEquipmentTag || 'N/A';
                        sldsheduleItem['EQUIPMENT DESCRIPTION'] = sldshedule.selectedEquipmentDescriptionForMajorEquipmentTag || 'N/A';
                        sldsheduleItem['MAJOR EQUIPMENT DEVICE TAG'] = sldshedule.majorEquipmentDeviceTag || 'New SLD Schedule';
                        sldsheduleItem['SYSTEM VOLTAGE'] = sldshedule.selectedSystemVoltage || 'N/A';
                        sldsheduleItem['INCOMER'] = sldshedule.incomer || 'N/A';
                        sldsheduleItem['LIGHTNING ARRESTOR'] = sldshedule.lightningArrestor || 'N/A';
                        sldsheduleItem['FEEDER ENTRY'] = sldshedule.selectedFeederEntry || 'N/A';
                        sldsheduleItem['SURGE PROTECTION'] = sldshedule.surgeProtection || 'N/A';
                        sldsheduleItem['O/C DEVICE'] = sldshedule.selectedOCDevice || 'N/A';
                        sldsheduleItem['CONTACTOR TYPE'] = sldshedule.selectedContactorType || 'N/A';
                        sldsheduleItem['CPT QTY'] = sldshedule.selectedCPTQTY || 'N/A';
                        sldsheduleItem['CT QTY'] = sldshedule.selectedCTQTY || 'N/A';
                        sldsheduleItem['TRIP RATING'] = sldshedule.tripRating || 'N/A';
                        sldsheduleItem['CONTACTOR SIZE'] = sldshedule.selectedContactorSize || 'N/A';;
                        sldsheduleItem['CPT VOLTAGE'] = sldshedule.selectedCPTVoltage || 'N/A';
                        sldsheduleItem['CT RATIO'] = sldshedule.selectedCTRatio || 'N/A';
                        sldsheduleItem['FRAME RATING'] = sldshedule.selectedFrameRating || 'N/A';
                        sldsheduleItem['OVERLOAD TYPE'] = sldshedule.selectedOverloadType || 'N/A';
                        sldsheduleItem['CPT RATING'] = sldshedule.selectedCPTRating || 'N/A';
                        sldsheduleItem['CT ACCURACY'] = sldshedule.selectedCTAccuracy || 'N/A';
                        sldsheduleItem['FUSE RATING'] = sldshedule.selectedFuseRating || 'N/A';
                        sldsheduleItem['OVERLOAD SIZE'] = sldshedule.overloadSize || 'N/A';
                        sldsheduleItem['VT QTY'] = sldshedule.selectedVTQTY || 'N/A';
                        sldsheduleItem['GFCT RATIO'] = sldshedule.selectedGFCTRatio || 'N/A';
                        sldsheduleItem['SWITCH RATING'] = sldshedule.selectedSwitchRating || 'N/A';
                        sldsheduleItem['VT VOLTAGE'] = sldshedule.selectedVTVoltage || 'N/A';
                        sldsheduleItem['SHUNT COIL'] = sldshedule.selectedShuntCoil || 'N/A';
                        sldsheduleItem['VT ACCURACY'] = sldshedule.selectedVTAccuracy || 'N/A';
                        sldsheduleItem['KIRK KEY'] = sldshedule.selectedKirkKey || 'N/A';
                        sldsheduleItem['GROUND STUD'] = sldshedule.selectedGroundStud || 'N/A';
                        sldsheduleItem['TRANSFORMER PR'] = sldshedule.TransformerPR || 'N/A';
                        sldsheduleItem['INDICATING LIGHTS'] = sldshedule.selectedIndicatingLights || 'N/A';
                        sldsheduleItem['N.O. AUX CONTACT'] = sldshedule.selectedNOAuxContact || 'N/A';
                        sldsheduleItem['PQM'] = sldshedule.PQM || 'N/A';
                        sldsheduleItem['MOTOR PR'] = sldshedule.MotorPR || 'N/A';
                        sldsheduleItem['SPACE HEATER'] = sldshedule.SpaceHeater || 'N/A';
                        sldsheduleItem['N.C. AUX CONTACT'] = sldshedule.selectedNCAuxContact || 'N/A';
                        sldsheduleItem['FEEDER PR'] = sldshedule.FeederPR || 'N/A';
                        sldsheduleItem['NGR RELAY'] = sldshedule.NGRRelay || 'N/A';
                        sldsheduleItem['HEATER CIRCUIT'] = sldshedule.HeaterCircuit || 'N/A';
                        sldsheduleItem['INTERPOS. RELAY'] = sldshedule.selectedInterposRelay || 'N/A';
                        sldsheduleItem['PDP Detail - Panel'] = sldshedule.selectedFirstPanelValue || 'N/A';
                        sldsheduleItem['PDP Detail - 2'] = sldshedule.selectedSecondPanelValue || 'N/A';
                        sldsheduleItem['PDP Detail - 3'] = sldshedule.selectedThirdPanelValue || 'N/A';
                        sldsheduleItem['CIRCUIT NUMBERS'] = sldshedule.CircuitNumbers || 'N/A';
                        sldsheduleItem['CFG'] = sldshedule.CFG || 'N/A';
                        sldsheduleItem['LOCAL SWITCH/PB - 1'] = sldshedule.selectedFirstValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['LOCAL SWITCH/PB - 2'] = sldshedule.selectedSecondValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['LOCAL SWITCH/PB - 3'] = sldshedule.selectedThirdValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['LOCAL SWITCH/PB - 4'] = sldshedule.selectedFourthValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH/PB - 1'] = sldshedule.selectedFirstValueFieldSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH/PB - 2'] = sldshedule.selectedSecondValueFieldSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH/PB - 3'] = sldshedule.selectedThirdValueFieldSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH/PB - 4'] = sldshedule.selectedFourthValueLocalFieldSwitchPB || 'N/A';
                        if (!sldshedule) {
                            res.json({ success: false, msg: 'Failed get sld-shedule  item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                sldsheduleItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get sld-shedule  item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get instrumentations item' });
    }
});
//GET CONTROLLER-SHEDULE for EXPORT TO EXCEL
router.get('/:id/sldshedule-item-list/:sldscheduleId', function (req, res) {
    if (req.params && req.params.id && req.params.sldscheduleId) {
        Project
            .findById(req.params.id)
            .select('sldschedules')
            .exec(
                function (err, project) {
                    var response, sldshedule;
                    var sldsheduleItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get sld-shedule item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get sld-shedule item' });
                        return;
                    }
                    if (project.sldschedules && project.sldschedules.length > 0) {
                        sldshedule = project.sldschedules.id(req.params.sldscheduleId);
                        //console.log(instrumentation);
                        sldsheduleItem['REV.'] = 'N/A';
                        sldsheduleItem['MAJOR EQUIPMENT DEVICE TAG'] = sldshedule.majorEquipmentDeviceTag || "";
                        sldsheduleItem['EQUIPMENT DESCRIPTION'] = 'N/A';
                        sldsheduleItem['DEVICE TYPE'] = sldshedule.selectedOCDevice || 'N/A';
                        sldsheduleItem['FRAME RATING'] = sldshedule.selectedFrameRating || 'N/A';
                        sldsheduleItem['TRIP RATING'] = sldshedule.tripRating || 'N/A';
                        sldsheduleItem['FUSE RATING'] = sldshedule.selectedFuseRating || 'N/A';
                        sldsheduleItem['CONTACTOR TYPE'] = sldshedule.selectedContactorType || 'N/A';
                        sldsheduleItem['CONTACTOR SIZE'] = sldshedule.selectedContactorSize || 'N/A';
                        sldsheduleItem['OVERLOAD TYPE'] = sldshedule.selectedOverloadType || 'N/A';
                        sldsheduleItem['OVERLOAD SIZE'] = sldshedule.overloadSize || 'N/A';
                        sldsheduleItem['CPT QTY'] = sldshedule.selectedCPTQTY || 'N/A';
                        sldsheduleItem['CPT VOLTAGE'] = sldshedule.selectedCPTVoltage || 'N/A';
                        sldsheduleItem['CPT RATING'] = sldshedule.selectedCPTRating || 'N/A';
                        sldsheduleItem['VT QTY'] = sldshedule.selectedVTQTY || 'N/A';
                        sldsheduleItem['VT VOLTAGE'] = sldshedule.selectedVTVoltage || 'N/A';;
                        sldsheduleItem['VT ACCURACY'] = sldshedule.selectedVTAccuracy || 'N/A';
                        sldsheduleItem['Ct QTY'] = sldshedule.selectedCTQTY || 'N/A';
                        sldsheduleItem['CT RATIO'] = sldshedule.selectedCTRatio || 'N/A';
                        sldsheduleItem['GF CT RATIO'] = sldshedule.selectedGFCTRatio || 'N/A';
                        sldsheduleItem['SHUNT COIL'] = sldshedule.selectedShuntCoil || 'N/A';
                        sldsheduleItem['KIRK KEY INTRLCK'] = sldshedule.selectedKirkKey || 'N/A';
                        sldsheduleItem['GROUND STUD'] = sldshedule.selectedGroundStud || 'N/A';
                        sldsheduleItem['PQM'] = sldshedule.PQM || 'N/A';
                        sldsheduleItem['FDR PR'] = sldshedule.FeederPR || 'N/A';
                        sldsheduleItem['TX PR'] = sldshedule.TransformerPR || 'N/A';
                        sldsheduleItem['MTR PR'] = sldshedule.MotorPR || 'N/A';
                        sldsheduleItem['NGR PR'] = sldshedule.NGRRelay || 'N/A';
                        sldsheduleItem['IND. LTS.'] = sldshedule.selectedIndicatingLights || 'N/A';
                        sldsheduleItem['SPC. HTR.'] = sldshedule.SpaceHeater || 'N/A';
                        sldsheduleItem['HTR. CIRC.'] = sldshedule.HeaterCircuit || 'N/A';
                        sldsheduleItem['N.O. AUX.'] = sldshedule.selectedNOAuxContact || 'N/A';
                        sldsheduleItem['N.C. AUX.'] = sldshedule.selectedNCAuxContact || 'N/A';
                        sldsheduleItem['IPOS. RLY.'] = sldshedule.selectedInterposRelay || 'N/A';
                        sldsheduleItem['LOCAL SWITCH / PUSHBUTTON 1'] = sldshedule.selectedFirstValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['LOCAL SWITCH / PUSHBUTTON 2'] = sldshedule.selectedSecondValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['LOCAL SWITCH / PUSHBUTTON 3'] = sldshedule.selectedThirdValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['LOCAL SWITCH / PUSHBUTTON 4'] = sldshedule.selectedFourthValueLocalSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH / PUSHBUTTON 1'] = sldshedule.selectedFirstValueFieldSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH / PUSHBUTTON 2'] = sldshedule.selectedSecondValueFieldSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH / PUSHBUTTON 3'] = sldshedule.selectedThirdValueFieldSwitchPB || 'N/A';
                        sldsheduleItem['FIELD SWITCH / PUSHBUTTON 4'] = sldshedule.selectedFourthValueLocalFieldSwitchPB || 'N/A';
                        if (!sldshedule) {
                            res.json({ success: false, msg: 'Failed get sld-shedule item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                sldsheduleItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get sld-shedule item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get sld-shedule item' });
    }
});
/* get ALL sldshedules for SLDSCEDULES-LIST*/
router.get('/:id/sld-schedules-list', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'sldschedules._id sldschedules.isChecked sldschedules.majorEquipmentDeviceTag sldschedules.selectedOCDevice ' + //пропустил Rev. и Equipment Description
                'sldschedules.selectedFrameRating sldschedules.tripRating sldschedules.selectedFuseRating sldschedules.selectedContactorType sldschedules.selectedContactorSize ' +
                'sldschedules.selectedOverloadType sldschedules.overloadSize sldschedules.selectedCPTQTY sldschedules.selectedCPTVoltage sldschedules.selectedCPTRating sldschedules.selectedVTQTY ' +
                'sldschedules.selectedVTVoltage sldschedules.selectedVTAccuracy sldschedules.selectedCTQTY sldschedules.selectedCTRatio sldschedules.selectedGFCTRatio sldschedules.selectedShuntCoil ' +
                'sldschedules.selectedKirkKey sldschedules.selectedGroundStud sldschedules.PQM sldschedules.FeederPR sldschedules.TransformerPR sldschedules.MotorPR sldschedules.NGRRelay ' +
                'sldschedules.selectedIndicatingLights sldschedules.SpaceHeater sldschedules.HeaterCircuit sldschedules.selectedFirstValueLocalSwitchPB sldschedules. ' +
                'sldschedules.selectedNOAuxContact sldschedules.selectedInterposRelay sldschedules.selectedNCAuxContact ' +
                'sldschedules.selectedSecondValueLocalSwitchPB sldschedules.selectedThirdValueLocalSwitchPB sldschedules.selectedFourthValueLocalSwitchPB sldschedules.selectedFirstValueFieldSwitchPB ' +
                'sldschedules.selectedSecondValueFieldSwitchPB sldschedules.selectedThirdValueFieldSwitchPB sldschedules.selectedFourthValueLocalFieldSwitchPB')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get sldschedule item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get sldschedule item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get sldschedule item' });
    }
});
/*GET ALL SLD-SCHEDULE*/
router.get('/:id/sld-schedules', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id)
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get sld-schedules item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get sld-schedules item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get sld-schedules item' });
    }
});
/* CREATE NEW SLD-SCHEDULE */
router.post('/:id/sld-schedule-create', function (req, res) {
    if (req.params.id) {
        Project
            .findById(req.params.id)
            .select('sldschedules')
            .exec(
                function (err, project) {
                    if (err) {
                        res.json({ success: false, msg: 'Failed get sld-schedule item' });
                    } else {
                        if (!project) {
                            res.json({ success: false, msg: 'Failed get sld-schedule item' });
                        } else {
                            project.sldschedules.push({});
                            project.save(function (err, project) {
                                if (err) {
                                    res.json({ success: false, msg: 'Failed get sld-schedule item' });
                                } else {
                                    res.json(project.sldschedules);
                                }
                            });
                        }
                    }
                });
    } else {
        res.json({ success: false, msg: 'Failed get sld-schedule item' });
    }
});
/* GET SINGLE SLD-SCHEDULE BY ID */
router.get('/:id/sld-schedules/:sldscheduleId', function (req, res) {
    if (req.params && req.params.id && req.params.sldscheduleId) {
        Project
            .findById(req.params.id)
            .select('sldschedules')
            .exec(
                function (err, project) {
                    var response, sldschedule;
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get sldschedule item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get sldschedule item' });
                        return;
                    }
                    if (project.sldschedules && project.sldschedules.length > 0) {
                        sldschedule = project.sldschedules.id(req.params.sldscheduleId);
                        if (!sldschedule) {
                            res.json({ success: false, msg: 'Failed get sldschedule item' });
                        } else {
                            response = {
                                sldschedule
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get sldschedule item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get sldschedule item' });
    }
});
/* UPDATE Item SLD-SCHEDULE*/
router.patch('/:id/sld-schedule-update/:sldScheduleId', function (req, res) {
    if (req.params && req.params.id && req.params.sldScheduleId) {
        Project
            .findById(req.params.id)
            .exec(
                function (err, project) {
                    var response, sldschedule;
                    sldschedule = project.sldschedules.id(req.params.sldScheduleId);
                    //Equipment Info   
                    sldschedule.selectedMajorEquipmentDevice = req.body.selectedMajorEquipmentDevice;
                    sldschedule.selectedEquipmentDescriptionForMajorEquipmentDevice = req.body.selectedEquipmentDescriptionForMajorEquipmentDevice;
                    sldschedule.selectedMajorEquipmentTag = req.body.selectedMajorEquipmentTag;
                    sldschedule.selectedEquipmentDescriptionForMajorEquipmentTag = req.body.selectedEquipmentDescriptionForMajorEquipmentTag;
                    sldschedule.majorEquipmentDeviceTag = req.body.majorEquipmentDeviceTag;
                    sldschedule.selectedSystemVoltage = req.body.selectedSystemVoltage;
                    //Incoming Section
                    sldschedule.incomer = req.body.incomer;
                    sldschedule.lightningArrestor = req.body.lightningArrestor;
                    sldschedule.selectedFeederEntry = req.body.selectedFeederEntry;
                    sldschedule.surgeProtection = req.body.surgeProtection;
                    //Central Part
                    sldschedule.selectedOCDevice = req.body.selectedOCDevice;
                    sldschedule.selectedContactorType = req.body.selectedContactorType;
                    sldschedule.selectedCPTQTY = req.body.selectedCPTQTY;
                    sldschedule.selectedCTQTY = req.body.selectedCTQTY;
                    sldschedule.tripRating = req.body.tripRating;
                    sldschedule.selectedContactorSize = req.body.selectedContactorSize;
                    sldschedule.selectedCPTVoltage = req.body.selectedCPTVoltage;
                    sldschedule.selectedCTRatio = req.body.selectedCTRatio;
                    sldschedule.selectedFrameRating = req.body.selectedFrameRating;
                    sldschedule.selectedOverloadType = req.body.selectedOverloadType;
                    sldschedule.selectedCPTRating = req.body.selectedCPTRating;
                    sldschedule.selectedCTAccuracy = req.body.selectedCTAccuracy;
                    sldschedule.selectedFuseRating = req.body.selectedFuseRating;
                    sldschedule.overloadSize = req.body.overloadSize;
                    sldschedule.selectedVTQTY = req.body.selectedVTQTY;
                    sldschedule.selectedGFCTRatio = req.body.selectedGFCTRatio;
                    sldschedule.selectedSwitchRating = req.body.selectedSwitchRating;
                    sldschedule.selectedVTVoltage = req.body.selectedVTVoltage;
                    sldschedule.selectedShuntCoil = req.body.selectedShuntCoil;
                    sldschedule.selectedVTAccuracy = req.body.selectedVTAccuracy;
                    sldschedule.selectedKirkKey = req.body.selectedKirkKey;
                    sldschedule.selectedGroundStud = req.body.selectedGroundStud;
                    sldschedule.TransformerPR = req.body.TransformerPR;
                    sldschedule.selectedIndicatingLights = req.body.selectedIndicatingLights;
                    sldschedule.selectedNOAuxContact = req.body.selectedNOAuxContact;
                    sldschedule.PQM = req.body.PQM;
                    sldschedule.MotorPR = req.body.MotorPR;
                    sldschedule.SpaceHeater = req.body.SpaceHeater;
                    sldschedule.selectedNCAuxContact = req.body.selectedNCAuxContact;
                    sldschedule.FeederPR = req.body.FeederPR;
                    sldschedule.NGRRelay = req.body.NGRRelay;
                    sldschedule.HeaterCircuit = req.body.HeaterCircuit;
                    sldschedule.selectedInterposRelay = req.body.selectedInterposRelay;
                    // PDP Detail
                    sldschedule.firstPanelValue = req.body.firstPanelValue;
                    sldschedule.selectedFirstPanelValue = req.body.selectedFirstPanelValue;
                    sldschedule.secondPanelValue = req.body.secondPanelValue;
                    sldschedule.selectedSecondPanelValue = req.body.selectedSecondPanelValue;
                    sldschedule.thirdPanelValue = req.body.thirdPanelValue;
                    sldschedule.selectedThirdPanelValue = req.body.selectedThirdPanelValue;
                    //sldschedule.selectedThirdPanelValue = req.body.selectedThirdPanelValue;
                    sldschedule.CircuitNumbers = req.body.CircuitNumbers;
                    sldschedule.CFG = req.body.CFG;
                    //Field Switch/PB
                    sldschedule.selectedFirstValueLocalSwitchPB = req.body.selectedFirstValueLocalSwitchPB;
                    sldschedule.selectedSecondValueLocalSwitchPB = req.body.selectedSecondValueLocalSwitchPB;
                    sldschedule.selectedThirdValueLocalSwitchPB = req.body.selectedThirdValueLocalSwitchPB;
                    sldschedule.selectedFourthValueLocalSwitchPB = req.body.selectedFourthValueLocalSwitchPB;
                    sldschedule.selectedFirstValueFieldSwitchPB = req.body.selectedFirstValueFieldSwitchPB;
                    sldschedule.selectedSecondValueFieldSwitchPB = req.body.selectedSecondValueFieldSwitchPB;
                    sldschedule.selectedThirdValueFieldSwitchPB = req.body.selectedThirdValueFieldSwitchPB;
                    sldschedule.selectedFourthValueLocalFieldSwitchPB = req.body.selectedFourthValueLocalFieldSwitchPB;
                    project.save(function (err, sldschedule) {
                        if (err) {
                            sendJSONresponse(res, 404, err);
                        } else {
                            sendJSONresponse(res, 200, project);
                        }
                    });
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "Not found, project or sldSchedule id"
        });
        return;
    }
});
/* DELETE SLD-SCHEDULE by ID*/
router.delete('/:id/sld-schedules/:sldScheduleId', function (req, res) {
    if (!req.params && !req.params.id && !req.params.sldScheduleId) {
        res.json({ success: false, msg: 'Failed params' });
        return;
    }
    Project
        .findById(req.params.id)
        .select('sldschedules')
        .exec(
            function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed delete project item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Error' });
                    return;
                }
                if (project.sldschedules && project.sldschedules.length > 0) {
                    project.sldschedules.id(req.params.sldScheduleId).remove();
                    project.save(function (err) {
                        if (err) {
                            res.json({ success: false, msg: 'Failed get sldSchedule item' });
                        } else {
                            sendJSONresponse(res, 204, null);
                        }
                    });
                } else {
                    res.json({ success: false, msg: 'Failed get sldSchedule item' });
                }
            }
        );
});

//CONTROLLER-SHEDULE
/*GET SINGLE CONTROLLER-SHEDULE-ITEM BY ID FOR EXCELL*/
router.get('/:id/controllers-item/:controllerId', function (req, res) {
    if (req.params && req.params.id && req.params.controllerId) {
        Project
            .findById(req.params.id)
            .select('controllers')
            .exec(
                function (err, project) {
                    var response, controller;
                    var controllerItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get controllers item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get controllers item' });
                        return;
                    }
                    if (project.controllers && project.controllers.length > 0) {
                        controller = project.controllers.id(req.params.controllerId);
                        //console.log(instrumentation);
                        controllerItem['ITEM NUMBER'] = controller.itemNumber || 'N/A';
                        controllerItem['REVISION'] = controller.revision || "New Instrumentation";
                        controllerItem['DATE ADDED'] = controller.dataAdded || 'N/A';
                        controllerItem['CONTROLS EQUIPMENT TAG 1'] = controller.controlsEquipmentTagFirst || 'N/A';
                        controllerItem['CONTROLS EQUIPMENT TAG 2'] = controller.controlsEquipmentTagSecond || 'N/A';
                        controllerItem['CONTROLS EQUIPMENT PARENT TAG'] = controller.selectedControlsEquipmentParentTag || 'N/A';
                        controllerItem['LOCATION'] = controller.selectedLocation || 'N/A';
                        controllerItem['DATA SHEET UMBER'] = controller.selectedDataSheetNumber || 'N/A';
                        controllerItem['LAYOUT DRAWING'] = controller.selectedLayoutDraving || 'N/A';
                        controllerItem['SCHEMANTIC DRAWING'] = controller.selectedSchematicDraving || 'N/A';
                        controllerItem['EQUIPMENT TYPE'] = controller.selectedEquipmentType || 'N/A';
                        controllerItem['CONTROLLER TYPE'] = controller.selectedControllerType.name || 'N/A';
                        controllerItem['CONTROLLER FUNCTION'] = controller.selectedControllerFunction.name || 'N/A';
                        controllerItem['CONTROLLER MANUFACTURER'] = controller.selectedControllerManufacturer.name || 'N/A';
                        controllerItem['CONTROLLER SERIES'] = controller.selectedControllerSeries.name || 'N/A';
                        controllerItem['CLONE EQUIPMENT TYPE'] = controller.selectedCloneEquipmentType.name || 'N/A';;
                        controllerItem['EQUIPMENT MODEL'] = controller.selectedEquipmentModel.name || 'N/A';
                        controllerItem['NODE'] = controller.node || 'N/A';
                        controllerItem['CHASSIS'] = controller.chassis || 'N/A';
                        controllerItem['SLOT'] = controller.slot || 'N/A';
                        controllerItem['DATA'] = controller.data || 'N/A';
                        controllerItem['IP ADDRESS'] = controller.selectedIPAdress.name || 'N/A';
                        controllerItem['I/O PER CARD'] = controller.selectedIOPerCard.name || 'N/A';
                        controllerItem['RELAY QUANTITY'] = controller.relayQuantity || 'N/A';
                        controllerItem['DC POWER'] = controller.dcPower || 'N/A';
                        controllerItem['ESD POWER'] = controller.esdPower || 'N/A';
                        controllerItem['I/O TAG'] = controller.selectedIOTag.name || 'N/A';
                        controllerItem['I/O TYPE'] = controller.selectedIOType.name || 'N/A';
                        controllerItem['I/O DESCRIPTION'] = controller.selectedIODescription.name || 'N/A';
                        controllerItem['RELAY I/O TAG'] = controller.selectedRelayIODescription.name || 'N/A';
                        controllerItem['RELAY I/O TYPE'] = controller.selectedRelayIOType.name || 'N/A';
                        controllerItem['RELAY I/O DESCRIPTION'] = controller.selectedIODescriptionRelay.name || 'N/A';
                        controllerItem['CONTROLLER TAG'] = controller.selectedControllerTag || 'N/A';
                        controllerItem['RACK#'] = controller.selectedRack || 'N/A';
                        if (!controller) {
                            res.json({ success: false, msg: 'Failed get controllers item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                controllerItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get instrumentations item' });
    }
});
//GET CONTROLLER-SHEDULE for EXPORT TO EXCEL
router.get('/:id/controllers-item-list/:controllerId', function (req, res) {
    if (req.params && req.params.id && req.params.controllerId) {
        Project
            .findById(req.params.id)
            .select('controllers')
            .exec(
                function (err, project) {
                    var response, controller;
                    var controllerItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get controller item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get controller item' });
                        return;
                    }
                    if (project.controllers && project.controllers.length > 0) {
                        controller = project.controllers.id(req.params.controllerId);
                        controllerItem['REV.'] = controller.revision || 'N/A';
                        controllerItem['CONTROLS EQUIPMENT TAG'] = controller.controlsEquipmentTagFirst || "New Controller";
                        controllerItem['CONTROLS EQUIPMENT PARENT TAG'] = controller.selectedControlsEquipmentParentTag || 'N/A';
                        controllerItem['CONTROLLER TYPE'] = controller.selectedControllerType.name || 'N/A';
                        controllerItem['CONTROLLER MANUFACTURER'] = controller.selectedControllerManufacturer.name || 'N/A';
                        controllerItem['CONTROLLER FUNCTION'] = controller.selectedControllerFunction.name || 'N/A';
                        controllerItem['CONTROLLER SERIES'] = controller.selectedControllerSeries.name || 'N/A';
                        controllerItem['EQUIPMENT TYPE'] = controller.selectedEquipmentType || 'N/A';
                        controllerItem['CLONE EQUIPMENT TYPE'] = controller.selectedCloneEquipmentType.name || 'N/A';
                        controllerItem['EQUIPMENT MODEL'] = controller.selectedEquipmentModel.name || 'N/A';
                        controllerItem['NODE'] = controller.node || 'N/A';
                        controllerItem['CHASSIS'] = controller.chassis || 'N/A';
                        controllerItem['SLOT'] = controller.slot || 'N/A';
                        controllerItem['DATA'] = controller.data || 'N/A';
                        controllerItem['IP ADDRESS'] = controller.selectedIPAdress.name || 'N/A';
                        controllerItem['I/O PER CARD'] = controller.selectedIOPerCard.name || 'N/A';;
                        controllerItem['DC POWER'] = controller.dcPower || 'N/A';
                        controllerItem['RELAY QUANTITY'] = controller.relayQuantity || 'N/A';
                        controllerItem['ESD POWER'] = controller.esdPower || 'N/A';
                        controllerItem['I/O TAG'] = controller.selectedIOTag.name || 'N/A';
                        controllerItem['I/O TYPE'] = controller.selectedIOType.name || 'N/A';
                        controllerItem['I/O DESCRIPTION'] = controller.selectedIODescription.name || 'N/A';
                        controllerItem['RELAY I/O TAG'] = controller.selectedRelayIODescription.name || 'N/A';
                        controllerItem['RELAY I/O TYPE'] = controller.selectedRelayIOType.name || 'N/A';
                        controllerItem['RELAY I/O DESCRIPTION'] = controller.selectedIODescriptionRelay.name || 'N/A';
                        if (!controller) {
                            res.json({ success: false, msg: 'Failed get controllers item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                controllerItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get controllers item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get controllers item' });
    }
});
/* get ALL controllers for CONTROLLERS-LIST*/
router.get('/:id/controllers-list', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'creator creatorEmail brows_team_project team_project controllers._id controllers.isChecked controllers.revision  controllers.controlsEquipmentTagFirst controllers.selectedControlsEquipmentParentTag' +
                'controllers.selectedControllerType.name controllers.selectedControllerManufacturer.name controllers.selectedControllerFunction.name ' +
                'controllers.selectedControllerSeries.name controllers.selectedEquipmentType controllers.selectedCloneEquipmentType.name controllers.selectedEquipmentModel.name' +
                'controllers.node controllers.chassis controllers.slot controllers.data controllers.selectedIPAdress.name controllers.selectedIOPerCard.name' +
                'controllers.dcPower controllers.relayQuantity controllers.esdPower controllers.selectedIOTag.name controllers.selectedIOType.name controllers.selectedIODescription.name ' +
                'controllers.selectedRelayIODescription.name controllers.selectedRelayIOType.name controllers.selectedRelayIODescription.name')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get controllers item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get controllers item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get controllers item' });
    }
});
/*GET ALL CONTROLLER-SHEDULE*/
router.get('/:id/controllers', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id)
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get controllers-shedule item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get controllers-shedule item' })
                }
                res.json(project);
            });
    }
});
/*CREATE NEW CONTROLLER-SHEDULE*/
router.post('/:id/controller-create', function (req, res) {
    if (req.params.id) {
        Project
            .findById(req.params.id)
            .select('controllers')
            .exec(
                function (err, project) {
                    if (err) {
                        res.json({ success: false, msg: 'Failed get controller-sld item' });
                    } else {
                        if (!project) {
                            res.json({ success: false, msg: 'Failed get controller-sld item' });
                        } else {
                            project.controllers.push({});
                            project.save(function (err, project) {
                                if (err) {
                                    res.json({ success: false, msg: 'Failed get controllers-sld item' });
                                } else {
                                    res.json(project.controllers);
                                }
                            });
                        }
                    }
                });
    } else {
        res.json({ success: false, msg: 'Failed get controller-sld item' });
    }
});
/*GET SINGLE CONTROLLER-SHEDULE BY ID*/
router.get('/:id/controllers/:controllerId', function (req, res) {
    if (req.params && req.params.id && req.params.controllerId) {
        Project
            .findById(req.params.id)
            .select('controllers')
            .exec(
                function (err, project) {
                    var response, controller;
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get controller item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get controller item' });
                        return;
                    }
                    if (project.controllers && project.controllers.length > 0) {
                        controller = project.controllers.id(req.params.controllerId);
                        if (!controller) {
                            res.json({ success: false, msg: 'Failed get controller item' });
                        } else {
                            response = {
                                controller
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get controller item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get controller item' });
    }
});
/*UPDATE Item CONTROLLER-SHEDULE*/
router.patch('/:id/controller-update/:controllerId', function (req, res) {
    if (req.params && req.params.id && req.params.controllerId) {
        Project
            .findById(req.params.id)
            .exec(
                function (err, project) {
                    var response, controller;
                    controller = project.controllers.id(req.params.controllerId);
                    //Controller Info
                    //missed Item Number - don`t have logic for thes element
                    controller.revision = req.body.revision;
                    //missed Date Added - don`t change, get this data when create new element
                    controller.controlsEquipmentTagFirst = req.body.controlsEquipmentTagFirst;
                    controller.controlsEquipmentTagSecond = req.body.controlsEquipmentTagSecond;
                    controller.controlsEquipmentParentTag = req.body.controlsEquipmentParentTag;
                    controller.selectedControlsEquipmentParentTag = req.body.selectedControlsEquipmentParentTag;
                    //missed New Tag - don`t have logic for thes element
                    controller.location = req.body.location;
                    controller.selectedLocation = req.body.selectedLocation;
                    controller.dataSheetNumber = req.body.dataSheetNumber;
                    controller.selectedDataSheetNumber = req.body.selectedDataSheetNumber;
                    controller.layoutDrawing = req.body.layoutDrawing;
                    controller.selectedLayoutDraving = req.body.selectedLayoutDraving;
                    controller.schematicDrawing = req.body.schematicDrawing;
                    controller.selectedSchematicDraving = req.body.selectedSchematicDraving;
                    controller.equipmentType = req.body.equipmentType;
                    controller.selectedEquipmentType = req.body.selectedEquipmentType;
                    controller.controllerType = req.body.controllerType;
                    controller.selectedControllerType = req.body.selectedControllerType;
                    controller.controllerFunction = req.body.controllerFunction;
                    controller.selectedControllerFunction = req.body.selectedControllerFunction;
                    controller.controllerManufacturer = req.body.controllerManufacturer;
                    controller.selectedControllerManufacturer = req.body.selectedControllerManufacturer;
                    controller.сontrollerSeries = req.body.сontrollerSeries;
                    controller.selectedControllerSeries = req.body.selectedControllerSeries;
                    controller.сloneEquipmentType = req.body.сloneEquipmentType;
                    controller.selectedCloneEquipmentType = req.body.selectedCloneEquipmentType;
                    controller.equipmentModel = req.body.equipmentModel;
                    controller.selectedEquipmentModel = req.body.selectedEquipmentModel;
                    //Node - Chassis - Slot - Data
                    controller.node = req.body.node;
                    controller.chassis = req.body.chassis;
                    controller.slot = req.body.slot;
                    controller.data = req.body.data;
                    //IP Address
                    controller.ipAdress = req.body.ipAdress;
                    controller.selectedIPAdress = req.body.selectedIPAdress;
                    //I/O Per Card
                    controller.ioPerCard = req.body.ioPerCard;
                    controller.selectedIOPerCard = req.body.selectedIOPerCard;
                    //Relay Quantity - DC Power - ESD Power
                    controller.relayQuantity = req.body.relayQuantity;
                    controller.dcPower = req.body.dcPower;
                    controller.esdPower = req.body.esdPower;
                    //I/O Tag
                    controller.ioTag = req.body.ioTag;
                    controller.selectedIOTag = req.body.selectedIOTag;
                    //I/O Type
                    controller.ioType = req.body.ioType;
                    controller.selectedIOType = req.body.selectedIOType;
                    //I/O Description
                    controller.ioDescription = req.body.ioDescription;
                    controller.selectedIODescription = req.body.selectedIODescription;
                    //Relay I/O Tag    
                    controller.relayIODescription = req.body.relayIODescription;
                    controller.selectedRelayIODescription = req.body.selectedRelayIODescription;
                    //Relay I/O Type
                    controller.relayIOType = req.body.relayIOType;
                    controller.selectedRelayIOType = req.body.selectedRelayIOType;
                    //Relai I/O Description
                    controller.IODescriptionRelay = req.body.IODescriptionRelay;
                    controller.selectedIODescriptionRelay = req.body.selectedIODescriptionRelay;

                    project.save(function (err, controller) {
                        if (err) {
                            sendJSONresponse(res, 404, err);
                        } else {
                            sendJSONresponse(res, 200, project);
                        }
                    });
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "Not found, project or controller id"
        });
        return;
    }
});
/*DELETE CONTROLLER-SHEDULE by ID*/
router.delete('/:id/controllers/:controllerId', function (req, res) {
    if (!req.params && !req.params.id && !req.params.controllerId) {
        res.json({ success: false, msg: 'Failed params' });
        return;
    }
    Project
        .findById(req.params.id)
        .select('controllers')
        .exec(
            function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed delete project item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Error' });
                    return;
                }
                if (project.controllers && project.controllers.length > 0) {
                    project.controllers.id(req.params.controllerId).remove();
                    project.save(function (err) {
                        if (err) {
                            res.json({ success: false, msg: 'Failed get controller item' });
                        } else {
                            sendJSONresponse(res, 204, null);
                        }
                    });
                } else {
                    res.json({ success: false, msg: 'Failed get controller item' });
                }
            }
        );
});

//INSTRUMENTATION ITEM
/*GET ALL INSTRUMENTSTION-ITEM */
router.get('/:id/instrumentations', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id)
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get  instrumentation item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get instrumentation item' })
                }
                res.json(project);
            });
    } else { }
});

/*get ALL Instrumentations for INSTRIMENTATIONS-LIST*/
router.get('/:id/instrumentations-list', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'instrumentations._id instrumentations.isChecked instrumentations.itemNumber instrumentations.instrumentationTag instrumentations.selectedInstrumentDescription ' +
                'instrumentations.selectedPidNumber instrumentations.selectedServiceDescription instrumentations.selectedFirstInstrumentType instrumentations.selectedSecondInstrumentType ' +
                'instrumentations.selectedManufacturer instrumentations.selectedDataSheetNumber instrumentations.selectedMrPoNumber instrumentations.selectedIOType' +
                'instrumentations.selectedModelNumber instrumentations.selectedStatus instrumentations.selectedLocation instrumentations.selectedSystem instrumentations.selectedSignalLevel ' +
                'instrumentations.selectedPowerSupply instrumentations.selectedInstrumentFunction instrumentations.selectedInstrumentDescription')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get instrumentstion item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get instrumentstion item' });
                }
                res.json(project);
            });
    } else {
        res.json({ success: false, msg: 'Failed get instrumentstion item' });
    }
});
/*CREATE NEW INSTRUMENTSTION-ITEM*/
router.post('/:id/instrumentation-create', function (req, res) {
    if (req.params.id) {
        Project
            .findById(req.params.id)
            .select('instrumentations')
            .exec(
                function (err, project) {
                    if (err) {
                        res.json({ success: false, msg: 'Failed get instrumentation item' });
                    } else {
                        if (!project) {
                            res.json({ success: false, msg: 'Failed get instrumentation item' });
                        } else {
                            project.instrumentations.push({});
                            project.save(function (err, project) {
                                if (err) {
                                    res.json({ success: false, msg: 'Failed get instrumentation item' });
                                } else {
                                    res.json(project.instrumentations);
                                }
                            });
                        }
                    }
                });
    } else {
        res.json({ success: false, msg: 'Failed get instrumentation item' });
    }
});

//GET INSTRIMENTATION for EXPORT TO EXCEL
router.get('/:id/instrumentations-item-list/:instrumentationId', function (req, res) {
    if (req.params && req.params.id && req.params.instrumentationId) {
        Project
            .findById(req.params.id)
            .select('instrumentations')
            .exec(
                function (err, project) {
                    var response, instrumentation;
                    var instrumentationItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                        return;
                    }
                    if (project.instrumentations && project.instrumentations.length > 0) {
                        instrumentation = project.instrumentations.id(req.params.instrumentationId);
                        //console.log(instrumentation);
                        instrumentationItem['ITEM.'] = instrumentation.itemNumber || 'N/A';
                        instrumentationItem['INSTRUMENTATION TAG'] = instrumentation.instrumentationTag || "New Instrumentation";
                        instrumentationItem['INSTRUMENT DESCRIPTION'] = instrumentation.selectedInstrumentDescription || 'N/A';
                        instrumentationItem['SERVICE DESCRIPTION'] = instrumentation.selectedServiceDescription || 'N/A';
                        instrumentationItem['INSTRUMENT FUNCTION'] = instrumentation.selectedInstrumentFunction || 'N/A';
                        instrumentationItem['INSTRUMENT TYPE 1'] = instrumentation.selectedFirstInstrumentType || 'N/A';
                        instrumentationItem['INSTRUMENT TYPE 2'] = instrumentation.selectedSecondInstrumentType || 'N/A';
                        instrumentationItem['STATUS'] = instrumentation.selectedStatus || 'N/A';
                        instrumentationItem['LOCATION'] = instrumentation.selectedLocation || 'N/A';
                        instrumentationItem['SYSTEM'] = instrumentation.selectedSystem || 'N/A';
                        instrumentationItem['I/O TYPE'] = instrumentation.selectedIOType || 'N/A';
                        instrumentationItem['SIGNAL LEVEL'] = instrumentation.selectedSignalLevel || 'N/A';
                        instrumentationItem['POWER SUPPLY'] = instrumentation.selectedPowerSupply || 'N/A';
                        instrumentationItem['PID NUMBER'] = instrumentation.selectedPidNumber || 'N/A';
                        instrumentationItem['DATA SHEET NUMBER'] = instrumentation.selectedDataSheetNumber || 'N/A';
                        instrumentationItem['MODEL NUMBER'] = instrumentation.selectedModelNumber || 'N/A';;
                        instrumentationItem['PO NUMBER'] = instrumentation.selectedMrPoNumber || 'N/A';
                        instrumentationItem['MANUFACTURER'] = instrumentation.selectedManufacturer || 'N/A';
                        if (!instrumentation) {
                            res.json({ success: false, msg: 'Failed get instrumentations item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                instrumentationItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get instrumentations item' });
    }
});

/*GET SINGLE INSTRUMENTSTION-ITEM BY ID FOR EXCELL*/
router.get('/:id/instrumentations-item/:instrumentationId', function (req, res) {
    if (req.params && req.params.id && req.params.instrumentationId) {
        Project
            .findById(req.params.id)
            .select('instrumentations')
            .exec(
                function (err, project) {
                    var response, instrumentation;
                    var instrumentationItem = {};
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                        return;
                    }
                    if (project.instrumentations && project.instrumentations.length > 0) {
                        instrumentation = project.instrumentations.id(req.params.instrumentationId);
                        instrumentationItem['ITEM.'] = instrumentation.itemNumber || 'N/A';
                        instrumentationItem['INSTRUMENTATION TAG'] = instrumentation.instrumentationTag || "New Instrumentation";
                        instrumentationItem['INSTRUMENT DESCRIPTION'] = instrumentation.selectedInstrumentDescription || 'N/A';
                        instrumentationItem['SERVICE DESCRIPTION'] = instrumentation.selectedServiceDescription || 'N/A';
                        instrumentationItem['INSTRUMENT FUNCTION'] = instrumentation.selectedInstrumentFunction || 'N/A';
                        instrumentationItem['INSTRUMENT TYPE 1'] = instrumentation.selectedFirstInstrumentType || 'N/A';
                        instrumentationItem['INSTRUMENT TYPE 2'] = instrumentation.selectedSecondInstrumentType || 'N/A';
                        instrumentationItem['STATUS'] = instrumentation.selectedStatus || 'N/A';
                        instrumentationItem['LOCATION'] = instrumentation.selectedLocation || 'N/A';
                        instrumentationItem['SYSTEM'] = instrumentation.selectedStatus || 'N/A';
                        instrumentationItem['I/O TYPE'] = instrumentation.selectedIOType || 'N/A';
                        instrumentationItem['SIGNAL LEVEL'] = instrumentation.selectedSignalLevel || 'N/A';
                        instrumentationItem['POWER SUPPLY'] = instrumentation.selectedPowerSupply || 'N/A';
                        instrumentationItem['PID NUMBER'] = instrumentation.selectedPidNumber || 'N/A';
                        instrumentationItem['LINE EQUIPMENT NUMBER'] = instrumentation.selectedLineEquipmentNumber || 'N/A';
                        instrumentationItem['DATA SHEET NUMBER'] = instrumentation.selectedDataSheetNumber || 'N/A';;
                        instrumentationItem['MODEL NUMBER'] = instrumentation.selectedModelNumber || 'N/A';
                        instrumentationItem['PO NUMBER'] = instrumentation.selectedMrPoNumber || 'N/A';
                        instrumentationItem['MANUFACTURER'] = instrumentation.selectedManufacturer || 'N/A';
                        instrumentationItem['INSTALLATION DETAIL'] = instrumentation.selectedInstallationDetail || 'N/A';
                        instrumentationItem['WRITING DRAWING'] = instrumentation.selectedWiringDrawing || 'N/A';
                        instrumentationItem['HAZLOC CLASS'] = instrumentation.selectedHazlocClass || 'N/A';
                        instrumentationItem['HAZLOC ZONE'] = instrumentation.selectedHazlocZone || 'N/A';
                        instrumentationItem['HAZLOC GROUP'] = instrumentation.selectedHazlocGroup || 'N/A';
                        instrumentationItem['HAZLOC TEMPERATURE'] = instrumentation.selectedHazlocTemperature || 'N/A';
                        instrumentationItem['VENDOR'] = instrumentation.selectedVendor || 'N/A';
                        instrumentationItem['COST'] = instrumentation.cost || 0;
                        instrumentationItem['SUPPLIED BY'] = instrumentation.selectedSuppliedBy || 'N/A';
                        instrumentationItem['INSTALED BY'] = instrumentation.selectedInstalledBy || 'N/A';
                        instrumentationItem['INSTRUMENTATION NOTES'] = instrumentation.instrumentationNotes || 'N/A';
                        instrumentationItem['INTERNAL NOTES'] = instrumentation.internalNotes || 'N/A';
                        instrumentationItem['DATA INSTRUMENT ADDED'] = instrumentation.dateInstrumentAdded || 'N/A' || 'N/A';
                        instrumentationItem['X'] = instrumentation.coordForX || 0;
                        instrumentationItem['Y'] = instrumentation.coordForY || 0;
                        instrumentationItem['Z'] = instrumentation.coordForZ || 0;
                        if (!instrumentation) {
                            res.json({ success: false, msg: 'Failed get instrumentations item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                instrumentationItem
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get instrumentations item' });
    }
});

/*GET SINGLE INSTRUMENTSTION-ITEM BY ID*/
router.get('/:id/instrumentations/:instrumentationId', function (req, res) {
    if (req.params && req.params.id && req.params.instrumentationId) {
        Project
            .findById(req.params.id)
            .select('instrumentations')
            .exec(
                function (err, project) {
                    var response, instrumentation;
                    if (!project) {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                        return;
                    } else if (err) {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                        return;
                    }
                    if (project.instrumentations && project.instrumentations.length > 0) {
                        instrumentation = project.instrumentations.id(req.params.instrumentationId);
                        if (!instrumentation) {
                            res.json({ success: false, msg: 'Failed get instrumentations item' });
                        } else {
                            response = {
                                status: 200,
                                success: 'success',
                                instrumentation
                            };
                            res.json(response);
                        }
                    } else {
                        res.json({ success: false, msg: 'Failed get instrumentations item' });
                    }
                }
            );
    } else {
        res.json({ success: false, msg: 'Failed get instrumentations item' });
    }
});
/*UPDATE Item INSTRUMENTSTION-ITEM */
router.patch('/:id/instrumentation-update/:instrumentationId', function (req, res) {
    if (req.params && req.params.id && req.params.instrumentationId) {
        Project
            .findById(req.params.id)
            .exec(
                function (err, project) {
                    var response, instrumentation;
                    instrumentation = project.instrumentations.id(req.params.instrumentationId);
                    //instrumentation.itemNumber = req.body.itemNumber;
                    instrumentation.instrumentationTag = req.body.instrumentationTag;
                    //instrumentation.hazlocClass = req.body.hazlocClass;
                    instrumentation.selectedHazlocClass = req.body.selectedHazlocClass;
                    instrumentation.hazlocZone = req.body.hazlocZone;
                    instrumentation.selectedHazlocZone = req.body.selectedHazlocZone;
                    //instrumentation.hazlocGroup = req.body.hazlocGroup;
                    instrumentation.selectedHazlocGroup = req.body.selectedHazlocGroup;
                    instrumentation.hazlocTemperature = req.body.hazlocTemperature;
                    instrumentation.selectedHazlocTemperature = req.body.selectedHazlocTemperature;
                    instrumentation.pidNumber = req.body.pidNumber;
                    instrumentation.selectedPidNumber = req.body.selectedPidNumber;
                    instrumentation.serviceDescription = req.body.serviceDescription;
                    instrumentation.selectedServiceDescription = req.body.selectedServiceDescription;
                    instrumentation.lineEquipmentNumber = req.body.lineEquipmentNumber;
                    instrumentation.selectedLineEquipmentNumber = req.body.selectedLineEquipmentNumber;
                    instrumentation.firstInstrumentType = req.body.firstInstrumentType;
                    instrumentation.selectedFirstInstrumentType = req.body.selectedFirstInstrumentType;
                    instrumentation.manufacturer = req.body.manufacturer;
                    instrumentation.selectedManufacturer = req.body.selectedManufacturer;
                    instrumentation.modelNumber = req.body.modelNumber;
                    instrumentation.selectedModelNumber = req.body.selectedModelNumber;
                    instrumentation.dataSheetNumber = req.body.dataSheetNumber;
                    instrumentation.selectedDataSheetNumber = req.body.selectedDataSheetNumber;
                    instrumentation.mrPoNumber = req.body.mrPoNumber;
                    instrumentation.selectedMrPoNumber = req.body.selectedMrPoNumber;
                    instrumentation.installationDetail = req.body.installationDetail;
                    instrumentation.selectedInstallationDetail = req.body.selectedInstallationDetail;
                    instrumentation.wiringDrawing = req.body.wiringDrawing;
                    instrumentation.selectedWiringDrawing = req.body.selectedWiringDrawing;
                    instrumentation.location = req.body.location;
                    instrumentation.selectedLocation = req.body.selectedLocation;
                    instrumentation.system = req.body.system;
                    instrumentation.selectedSystem = req.body.selectedSystem;
                    instrumentation.secondInstrumentType = req.body.secondInstrumentType;
                    instrumentation.selectedSecondInstrumentType = req.body.selectedSecondInstrumentType;
                    instrumentation.status = req.body.status;
                    instrumentation.selectedStatus = req.body.selectedStatus;
                    instrumentation.vendor = req.body.vendor;
                    instrumentation.selectedVendor = req.body.selectedVendor;
                    instrumentation.cost = req.body.cost;
                    instrumentation.suppliedBy = req.body.suppliedBy;
                    instrumentation.selectedSuppliedBy = req.body.selectedSuppliedBy;
                    instrumentation.installedBy = req.body.installedBy;
                    instrumentation.selectedInstalledBy = req.body.selectedInstalledBy;
                    instrumentation.signalLevel = req.body.signalLevel;
                    instrumentation.selectedSignalLevel = req.body.selectedSignalLevel;
                    instrumentation.ioType = req.body.ioType;
                    instrumentation.selectedIOType = req.body.selectedIOType;
                    //instrumentation.dateInstrumentAdded = req.body.dateInstrumentAdded;
                    //instrumentation.cloneTag = req.body.cloneTag;
                    instrumentation.coordForX = req.body.coordForX;
                    instrumentation.coordForY = req.body.coordForY;
                    instrumentation.coordForZ = req.body.coordForZ;
                    instrumentation.powerSupply = req.body.powerSupply;
                    instrumentation.selectedPowerSupply = req.body.selectedPowerSupply;
                    instrumentation.instrumentFunction = req.body.instrumentFunction;
                    instrumentation.selectedInstrumentFunction = req.body.selectedInstrumentFunction;
                    instrumentation.instrumentationNotes = req.body.instrumentationNotes;
                    instrumentation.internalNotes = req.body.internalNotes;
                    instrumentation.instrumentDescription = req.body.instrumentDescription;
                    instrumentation.selectedInstrumentDescription = req.body.selectedInstrumentDescription;
                    //instrumentation.newTag = req.body.newTag;
                    project.save(function (err, instrumentation) {
                        if (err) {
                            sendJSONresponse(res, 404, err);
                        } else {
                            sendJSONresponse(res, 200, project);
                        }
                    });
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "Not found, project or controller id"
        });
        return;
    }
})
/*DELETE INSTRUMENTSTION-ITEM by ID*/
router.delete('/:id/instrumentations/:instrumentationId', function (req, res) {
    if (!req.params && !req.params.id && !req.params.instrumentationId) {
        res.json({ success: false, msg: 'Failed params' });
        return;
    }
    Project
        .findById(req.params.id)
        .select('instrumentations')
        .exec(
            function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed delete project item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Error' });
                    return;
                }
                if (project.instrumentations && project.instrumentations.length > 0) {
                    project.instrumentations.id(req.params.instrumentationId).remove();
                    project.save(function (err) {
                        if (err) {
                            res.json({ success: false, msg: 'Failed get instrumentation item' });
                        } else {
                            sendJSONresponse(res, 204, null);
                        }
                    });
                } else {
                    res.json({ success: false, msg: 'Failed get instrumentation item' });
                }
            }
        );
});

//IO ASSIGNMENT
/*CREATE NEW IO ASSIGNMENT*/
router.post('/:id/io_assignment-create', function (req, res) {
    if (req.params.id) {
        Project
            .findById(req.params.id)
            .select('ioAssignments')
            .exec(
                function (err, project) {
                    if (err) {
                        res.json({ success: false, msg: 'Failed get ioAssignment item' });
                    } else {
                        if (!project) {
                            res.json({ success: false, msg: 'Failed get ioAssignment item' });
                        } else {
                            project.ioAssignments.push({});
                            project.save(function (err, project) {
                                if (err) {
                                    res.json({ success: false, msg: 'Failed get ioAssignment item' });
                                } else {
                                    res.json(project.ioAssignments);
                                }
                            });
                        }
                    }
                });
    } else {
        res.json({ success: false, msg: 'Failed get ioAssignment item' });
    }
});

/*GET ALL IO ASSIGNMENT */
router.get('/:id/ioassignments', function (req, res) {
    if (req.params) {
        Project
            .findById(req.params.id, 'instrumentations.instrumentationTag controllers.controlsEquipmentTagFirst ioAssignments')
            .exec(function (err, project) {
                if (!project) {
                    res.json({ success: false, msg: 'Failed get ioassignment item' });
                    return;
                } else if (err) {
                    res.json({ success: false, msg: 'Failed get ioassignment item' })
                }
                console.log(project);
                res.json(project);
            });
    } else { }
});
//
router.patch('/:id/io_assignment-update', function (req, res) {
    if (req.params && req.params.id) {
        Project
            .findById(req.params.id)
            .select('ioAssignments')
            .exec(
                function (err, project) {
                    var response, ioAssignment;
                    ioAssignment = {};
                    ioAssignment.fullDescription = [];
                    ioAssignment.selectedController = req.body.selectedController;
                    ioAssignment.selectedTag = req.body.selectedTag;
                    if (project.ioAssignments.length === 0) {
                        project.ioAssignments = [];
                        ioAssignment.selectedTag = req.body.selectedTag;
                        var user = JSON.parse(req.body.fullDescription);
                        var peopleArray = Object.keys(user).map(i => user[i]);
                        ioAssignment.fullDescription = peopleArray;
                        for (var j = 0; j < ioAssignment.fullDescription.length; ++j) {
                            var tempIOTF = ioAssignment.fullDescription[j].ioTypeFirst;
                            ioAssignment.fullDescription[j].ioTypeFirst = [];
                            var ioTF = Object.keys(tempIOTF).map(w => tempIOTF[w]);
                            ioAssignment.fullDescription[j].ioTypeFirst = ioTF;
                            var tempIOTS = ioAssignment.fullDescription[j].ioTypeSecond;
                            var ioTS = Object.keys(tempIOTS).map(x => tempIOTS[x]);
                            ioAssignment.fullDescription[j].ioTypeSecond = [];
                            ioAssignment.fullDescription[j].ioTypeSecond = ioTS;
                            var tempIOTTh = ioAssignment.fullDescription[j].ioTypeThird;
                            var ioTTh = Object.keys(tempIOTTh).map(y => tempIOTTh[y]);
                            ioAssignment.fullDescription[j].ioTypeThird = [];
                            ioAssignment.fullDescription[j].ioTypeThird = ioTTh;
                            var tempIOTF = ioAssignment.fullDescription[j].ioTypeFourth;
                            var ioTF = Object.keys(tempIOTF).map(z => tempIOTF[z]);
                            ioAssignment.fullDescription[j].ioTypeFourth = [];
                            ioAssignment.fullDescription[j].ioTypeFourth = ioTF;
                        }
                        project.ioAssignments.push(ioAssignment);
                    } else {
                        for (var k = 0; k < project.ioAssignments.length; ++k) {
                            var ttt = project.ioAssignments[k];
                            if (req.body.selectedController === ttt.selectedController) {
                                var newFullDescription = JSON.parse(req.body.fullDescription);
                                var newFullDescriptionArray = Object.keys(newFullDescription).map(i => newFullDescription[i]);
                                ioAssignment.fullDescription = newFullDescriptionArray;
                                for (var j = 0; j < ioAssignment.fullDescription.length; ++j) {
                                    var tempIOTF = ioAssignment.fullDescription[j].ioTypeFirst;
                                    ioAssignment.fullDescription[j].ioTypeFirst = [];
                                    var ioTF = Object.keys(tempIOTF).map(w => tempIOTF[w]);
                                    ioAssignment.fullDescription[j].ioTypeFirst = ioTF;
                                    var tempIOTS = ioAssignment.fullDescription[j].ioTypeSecond;
                                    var ioTS = Object.keys(tempIOTS).map(x => tempIOTS[x]);
                                    ioAssignment.fullDescription[j].ioTypeSecond = [];
                                    ioAssignment.fullDescription[j].ioTypeSecond = ioTS;
                                    var tempIOTTh = ioAssignment.fullDescription[j].ioTypeThird;
                                    var ioTTh = Object.keys(tempIOTTh).map(y => tempIOTTh[y]);
                                    ioAssignment.fullDescription[j].ioTypeThird = [];
                                    ioAssignment.fullDescription[j].ioTypeThird = ioTTh;
                                    var tempIOTF = ioAssignment.fullDescription[j].ioTypeFourth;
                                    var ioTF = Object.keys(tempIOTF).map(z => tempIOTF[z]);
                                    ioAssignment.fullDescription[j].ioTypeFourth = [];
                                    ioAssignment.fullDescription[j].ioTypeFourth = ioTF;
                                }
                                var index = k;
                                project.ioAssignments.splice(index, 1, ioAssignment);
                            } else {
                                ioAssignment.selectedTag = req.body.selectedTag;
                                var user = JSON.parse(req.body.fullDescription);
                                var peopleArray = Object.keys(user).map(i => user[i]);
                                ioAssignment.fullDescription = peopleArray;
                                for (var j = 0; j < ioAssignment.fullDescription.length; ++j) {
                                    var tempIOTF = ioAssignment.fullDescription[j].ioTypeFirst;
                                    ioAssignment.fullDescription[j].ioTypeFirst = [];
                                    var ioTF = Object.keys(tempIOTF).map(w => tempIOTF[w]);
                                    ioAssignment.fullDescription[j].ioTypeFirst = ioTF;
                                    var tempIOTS = ioAssignment.fullDescription[j].ioTypeSecond;
                                    var ioTS = Object.keys(tempIOTS).map(x => tempIOTS[x]);
                                    ioAssignment.fullDescription[j].ioTypeSecond = [];
                                    ioAssignment.fullDescription[j].ioTypeSecond = ioTS;
                                    var tempIOTTh = ioAssignment.fullDescription[j].ioTypeThird;
                                    var ioTTh = Object.keys(tempIOTTh).map(y => tempIOTTh[y]);
                                    ioAssignment.fullDescription[j].ioTypeThird = [];
                                    ioAssignment.fullDescription[j].ioTypeThird = ioTTh;
                                    var tempIOTF = ioAssignment.fullDescription[j].ioTypeFourth;
                                    var ioTF = Object.keys(tempIOTF).map(z => tempIOTF[z]);
                                    ioAssignment.fullDescription[j].ioTypeFourth = [];
                                    ioAssignment.fullDescription[j].ioTypeFourth = ioTF;
                                }
                                project.ioAssignments.push(ioAssignment);
                            }
                        }
                    }
                    project.save(function (err, project) {
                        if (err) {
                            res.json({ success: false, msg: 'Failed get ioAssignment item' });
                        } else {
                            res.json(project.ioAssignments);
                        }
                    });
                });
    } else {
        sendJSONresponse(res, 404, {
            "message": "Not found, project or controller id"
        });
        return;
    }
});

module.exports = router;