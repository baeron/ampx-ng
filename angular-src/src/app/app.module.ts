// MAIN SOLUTION COMPONENTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MyDatePickerModule } from 'mydatepicker';
import { UiSwitchModule } from 'angular2-ui-switch';

// MAIN PROJECT COMPONENT
import { AppComponent } from './app.component';

// NAVIGATION COMPONENT
import { NavbarComponent } from './components/navbar/navbar.component';

// MAIN SITE COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { SigninComponent } from './components/signin/signin.component';

// CONRACT US COMPONENTS
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';

// PROFILE COMPONENT
import { ProfileComponent } from './components/profile/profile.component';

// AUTHORIZATION AND AUTHENTICATION COMPONENTS
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// PROJECTS COMPONENTS
import { ProjectService } from './services/project.service';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsModalComponent } from './components/modals/projects-modal/projects-modal.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
// PROJECTS TEAM
import { TeamWorkModalComponent } from './components/modals/team-work-modal/team-work-modal.component';

// ELECTRICALS COMPONENTS
import { ElectricalService } from './services/electrical.service';
import { ElectricalListComponent } from './components/electrical-list/electrical-list.component';
import { ElectricalItemComponent } from './components/electrical-item/electrical-item.component';
import { ElectricalsModalComponent } from './components/modals/electricals-modal/electricals-modal.component';

// CABLES COMPONENTS
import { CableService } from './services/cable.service';
import { CableListComponent } from './components/cable-list/cable-list.component';
import { CableItemComponent } from './components/cable-item/cable-item.component';
import { CableDistanceModalComponent } from './components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component';

// SLD SHEDULES COMPONENTS
import { SldscheduleService } from './services/sldschedule.service';
import { SldScheduleListComponent } from './components/sld-schedule-list/sld-schedule-list.component';
import { SldScheduleItemComponent } from './components/sld-schedule-item/sld-schedule-item.component';

// CONTROLLER SHEDULE
import { ControllerService } from './services/controller.service';
import { ControllersListComponent } from './components/controllers-list/controllers-list.component';
import { ControllerItemComponent } from './components/controller-item/controller-item.component';
import { ControllerModalComponent } from './components/modals/controller-modal/controller-modal.component';

// INSTRUMENTATION INDEX
import { InstrumentationService } from './services/instrumentation.service';
import { InstrumentationListComponent } from './components/instrumentation-list/instrumentation-list.component';
import { InstrumentationItemComponent } from './components/instrumentation-item/instrumentation-item.component';

// EXCELL service
import { ExcelService } from './services/excel.service';

// IO ASSIGNMENT
import { IoAssignmentComponent } from './components/io-assignment/io-assignment.component';
import { IoAssignmentService } from './services/io-assignment.service';
// import { ElectricalItemSecondComponent } from './components/electrical-item-second/electrical-item-second.component';

//
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { SimpleElectricalModalComponent } from './components/modals/simple-electrical-modal/simple-electrical-modal.component';
import { DropDownDependentComponent } from './components/drop-down-dependent/drop-down-dependent.component';
import { MultipleModalComponent } from './components/modals/multiple-modal/multiple-modal.component';
import { SuperadminComponent } from './components/superadmin/superadmin.component';
// import { AdminComponent } from './components/admin/admin.component';

// SUPERADMIN and ADMIN part
import { UsersService } from './services/users.service';

// TODO move to separate component
const appRoutes: Routes = [
  // main pages
  { path: '', component: HomeComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact_us', component: ContactUsComponent },

  // registration and authentication

  { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  // projects
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'project/:id', component: ProjectDashboardComponent, canActivate: [AuthGuard] },

  // electricals
  { path: 'project/:id/electricals', component: ElectricalListComponent, canActivate: [AuthGuard] },
  { path: 'project/:id/electricals/:electricalid', component: ElectricalItemComponent, canActivate: [AuthGuard] },
  // cables
  { path: 'project/:id/cables', component: CableListComponent, canActivate: [AuthGuard] },
  { path: 'project/:id/cables/:cableId', component: CableItemComponent, canActivate: [AuthGuard] },
  // sld schedule
  { path: 'project/:id/sldshedules', component: SldScheduleListComponent, canActivate: [AuthGuard] },
  { path: 'project/:id/sldshedules/:sldsheduleId', component: SldScheduleItemComponent, canActivate: [AuthGuard] },
  // controller schedule
  { path: 'project/:id/controllers', component: ControllersListComponent, canActivate: [AuthGuard] },
  { path: 'project/:id/controllers/:controllerId', component: ControllerItemComponent, canActivate: [AuthGuard] },
  // instrumentation index
  { path: 'project/:id/instrumentations', component: InstrumentationListComponent, canActivate: [AuthGuard] },
  { path: 'project/:id/instrumentations/:instrumentationId', component: InstrumentationItemComponent, canActivate: [AuthGuard] },
  // IO Assignment
  // {path: 'project/:id/ioassignment', component: IoAssignmentComponent, canActivate:[AuthGuard]},
  // profile
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // Superadmin page
  { path: 'superadmin', component: SuperadminComponent, canActivate: [AuthGuard] },
  // Page not found
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProjectComponent,
    ProfileComponent,
    ProjectsModalComponent,
    TeamWorkModalComponent,
    ProjectDashboardComponent,
    ElectricalListComponent,
    ElectricalItemComponent,
    ElectricalsModalComponent,
    CableListComponent,
    CableItemComponent,
    CableDistanceModalComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    SigninComponent,
    SldScheduleListComponent,
    SldScheduleItemComponent,
    ControllersListComponent,
    ControllerItemComponent,
    ControllerModalComponent,
    InstrumentationListComponent,
    InstrumentationItemComponent,
    IoAssignmentComponent,
    // ElectricalItemSecondComponent,
    DropDownComponent,
    SimpleElectricalModalComponent,
    DropDownDependentComponent,
    MultipleModalComponent,
    SuperadminComponent
    // AdminComponent
  ],
  imports: [
    BrowserModule,
    // UiSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    ProjectService,
    ElectricalService,
    CableService,
    SldscheduleService,
    ControllerService,
    InstrumentationService,
    ContactUsService,
    ExcelService,
    IoAssignmentService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
