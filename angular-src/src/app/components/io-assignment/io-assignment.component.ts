import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { IoAssignmentService } from '../../services/io-assignment.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-io-assignment',
  templateUrl: './io-assignment.component.html',
  styleUrls: ['./io-assignment.component.css']
})
export class IoAssignmentComponent implements OnInit {
  myForm: FormGroup;
  newAttribute: any = {};
  projectId: string;
  ioassignments: any;
  formData: any;
  fieldArray: Array<any> = [];
  changeIOAssigmentTableAfterChangeTagAndController = [];

  constructor(
    private fb: FormBuilder,
    private ioAssignmentService: IoAssignmentService,
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
  // tslint:disable-next-line:one-line
  ){
    this.projectId = this.route.snapshot.params['id'];
    this.newAttribute = { };

    this.newAttribute.ioTypeFirst = ['DI', 'DO', 'AI', 'IAI', 'H-AI', 'AO', 'H-AO', 'RTD', 'TC'];
    this.newAttribute.selectedIoTypeFirst = '';
    this.newAttribute.ioTypeSecond = ['A', 'B', 'E', 'F', 'I', 'J', 'K', 'L', 'P', 'PD', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];
    this.newAttribute.selectedIoTypeSecond = '';
    this.newAttribute.ioTypeThird = ['I', 'R', 'S'];
    this.newAttribute.ioTypeFourth = ['E', 'H', 'HH', 'L', 'LL', 'S', 'T', 'Y'];
    this.newAttribute.selectedIoTypeFourth = '';
  }

  ngOnInit() {
    this.ioAssignmentService.getIoAssignmentList(this.projectId).subscribe(ioAssignmentList => {
      this.ioassignments = ioAssignmentList;
      this.changeIOAssigmentTableAfterChangeTagAndController.push(this.newAttribute);
      this.spinnerService.hide();
    },
    err => {
      console.log(err);
      return false;
    });
  }

  ioassignmentsTagChange(info) {
    console.log(info);
  }

  ioassignmentsControllerChange(selectedTag, selectedController) {
    if (selectedTag) {
      this.changeIOAssigmentTableAfterChangeTagAndController = this.ioassignments.ioAssignments
        .filter(et => et.selectedController  === this.ioassignments.selectedController);
      if (this.changeIOAssigmentTableAfterChangeTagAndController.length === 0) {
        this.changeIOAssigmentTableAfterChangeTagAndController.push(this.newAttribute);
        return;
      } else {
        this.changeIOAssigmentTableAfterChangeTagAndController;
      }
    } else {
      return;
    }
  }

  addFieldValue2(index) {
    if(!this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription) {
      this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription = [];
      this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription.push(this.newAttribute);
    } else {
      this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription.push(this.newAttribute);
    }
    this.newAttribute = { };
    this.newAttribute.ioTypeFirst = ['DI', 'DO', 'AI', 'IAI', 'H-AI', 'AO', 'H-AO', 'RTD', 'TC'];
    this.newAttribute.selectedIoTypeFirst = '';
    this.newAttribute.ioTypeSecond = ['A', 'B', 'E', 'F', 'I', 'J', 'K', 'L', 'P', 'PD', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];
    this.newAttribute.selectedIoTypeSecond = '';
    this.newAttribute.ioTypeThird = ['I', 'R', 'S'];
    this.newAttribute.selectedIoTypeThird = '';
    this.newAttribute.ioTypeFourth = ['E', 'H', 'HH', 'L', 'LL', 'S', 'T', 'Y'];
    this.newAttribute.selectedIoTypeFourth = '';
  }

  deleteFieldValue2(index) {
    this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription.splice(index, 1);
  }


  cleanStringify(object) {
    if (object && typeof object === 'object') {
        object = copyWithoutCircularReferences([object], object);
    }
    return JSON.stringify(object);
    function copyWithoutCircularReferences(references, object) {
        const cleanObject = {};
        Object.keys(object).forEach(function(key) {
            const value = object[key];
            if (value && typeof value === 'object') {
                if (references.indexOf(value) < 0) {
                    references.push(value);
                    cleanObject[key] = copyWithoutCircularReferences(references, value);
                    references.pop();
                } else {
                    cleanObject[key] = '###_Circular_###';
                }
            } else if (typeof value !== 'function') {
                cleanObject[key] = value;
            }
        });
        return cleanObject;
    }
}

  saveIOAssignment(data) {
    this.formData = {};
    this.formData.selectedController = data.selectedController;
    this.formData.selectedTag = data.selectedTag;
    this.formData.fullDescription = [];
    let fullDescription = this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription;
    const temp = this.cleanStringify(this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription);
    this.formData.fullDescription = temp;
    this.ioAssignmentService.updateIOAssignment(this.projectId, this.formData).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId]);
    }, (err) => {
      console.log(err);
    });
  }
}
