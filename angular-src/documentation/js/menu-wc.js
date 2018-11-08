'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">angular-src documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' : 'data-target="#xs-components-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' : 'id="xs-components-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' }>
                                        <li class="link">
                                            <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutUsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CableDistanceModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CableDistanceModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CableItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CableItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CableListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CableListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContactUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactUsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ControllerItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ControllerItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ControllerModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ControllerModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ControllersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ControllersListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DropDownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropDownComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DropDownDependentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropDownDependentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ElectricalItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElectricalItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ElectricalListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElectricalListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ElectricalsModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElectricalsModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/InstrumentationItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstrumentationItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/InstrumentationListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstrumentationListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IoAssignmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IoAssignmentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MultipleModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MultipleModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProjectDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectDashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProjectsModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ServicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServicesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SigninComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SimpleElectricalModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleElectricalModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SldScheduleItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SldScheduleItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SldScheduleListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SldScheduleListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SuperadminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SuperadminComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TeamWorkModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TeamWorkModalComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' : 'data-target="#xs-injectables-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' : 'id="xs-injectables-links-module-AppModule-140441f763e263aada0f3c6e365dc7d5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CableService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContactUsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ContactUsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ControllerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ControllerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ElectricalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ElectricalService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExcelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ExcelService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstrumentationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>InstrumentationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/IoAssignmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>IoAssignmentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProjectService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SldscheduleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SldscheduleService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UsersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ValidateService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/CustomValidators.html" data-type="entity-link">CustomValidators</a>
                    </li>
                    <li class="link">
                        <a href="classes/DependedItem.html" data-type="entity-link">DependedItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/Electrical.html" data-type="entity-link">Electrical</a>
                    </li>
                    <li class="link">
                        <a href="classes/ElectricalShort.html" data-type="entity-link">ElectricalShort</a>
                    </li>
                    <li class="link">
                        <a href="classes/Profile.html" data-type="entity-link">Profile</a>
                    </li>
                    <li class="link">
                        <a href="classes/SldSchedule.html" data-type="entity-link">SldSchedule</a>
                    </li>
                    <li class="link">
                        <a href="classes/SldSchedule-1.html" data-type="entity-link">SldSchedule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CableService.html" data-type="entity-link">CableService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ContactUsService.html" data-type="entity-link">ContactUsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ControllerService.html" data-type="entity-link">ControllerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ElectricalService.html" data-type="entity-link">ElectricalService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ExcelService.html" data-type="entity-link">ExcelService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/InstrumentationService.html" data-type="entity-link">InstrumentationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/IoAssignmentService.html" data-type="entity-link">IoAssignmentService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProjectService.html" data-type="entity-link">ProjectService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SldscheduleService.html" data-type="entity-link">SldscheduleService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UsersService.html" data-type="entity-link">UsersService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ValidateService.html" data-type="entity-link">ValidateService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/IBaseProject.html" data-type="entity-link">IBaseProject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IProject.html" data-type="entity-link">IProject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IProject-1.html" data-type="entity-link">IProject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IUser.html" data-type="entity-link">IUser</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
