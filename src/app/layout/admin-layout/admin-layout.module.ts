import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {  AppointmmentComponent, ChatPanelComponent, DashboardComponent, PaymentComponent, SalonsSpecialistComponent, SpecialistViewComponent,  } from 'src/app/components/full-layout/full-layout';
import { RouterModule } from '@angular/router';
import { AboutComponent, ContactUsComponent, EditSaloonProfileComponent, MoreComponent, FavoriteSaloonsListComponent,PrivacyPolicyComponent, RateSalonComponent, SchedulesComponent, SettingsComponent, TermsConditionComponent, TransactionListComponent, ServiceComponent, ReviewRatingComponent, EmployeeListComponent } from 'src/app/components/full-layout/more/more';
import { UpcomingAppointmentComponent, UserAppointmentComponent, UserComponent } from 'src/app/components/full-layout/user-side/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ChangePasswordComponent } from 'src/app/components/full-layout/more/change-password/change-password.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AppointmmentComponent,
    DashboardComponent,
    SalonsSpecialistComponent,
    MoreComponent,
    SpecialistViewComponent,
    SettingsComponent,
    TransactionListComponent,
    FavoriteSaloonsListComponent,
    ServiceComponent,
    RateSalonComponent,
    UpcomingAppointmentComponent,
    UserAppointmentComponent,
    EditSaloonProfileComponent,
    SchedulesComponent,
    AboutComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    SchedulesComponent,
    TermsConditionComponent,
    PaymentComponent,
    UserComponent,
    ChatPanelComponent,
    ReviewRatingComponent,
    ChangePasswordComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule
  ],
  providers: [AuthGuardService]
})
export class AdminLayoutModule { }
