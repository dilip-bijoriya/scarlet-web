import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreComponent } from 'src/app/components/full-layout/more/more.component';
import {  AppointmmentComponent, ChatPanelComponent, DashboardComponent,
   PaymentComponent,
   SalonsSpecialistComponent, SchduleAppointmentComponent, 
    SpecialistViewComponent,  } from 'src/app/components/full-layout/full-layout';
import { AdminLayoutComponent } from './admin-layout.component';
import { AboutComponent, ContactUsComponent, EditSaloonProfileComponent,EmployeeListComponent,FavoriteSaloonsListComponent, PrivacyPolicyComponent, RateSalonComponent, ReviewRatingComponent, SchedulesComponent, ServiceComponent, SettingsComponent, TermsConditionComponent, TransactionListComponent } from 'src/app/components/full-layout/more/more';
import { UpcomingAppointmentComponent, UserAppointmentComponent, UserComponent } from 'src/app/components/full-layout/user-side/user';
import { ChangePasswordComponent } from 'src/app/components/full-layout/more/change-password/change-password.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  // canActivate:[AuthGuardService],
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'appointment',
      component: AppointmmentComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'salons-and-specialist',
      component: SalonsSpecialistComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'schedule-appointement',
      component: SchduleAppointmentComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'specialist-view',
      component: SpecialistViewComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'schedules',
      component: SchedulesComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'payment',
      component: PaymentComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more',
      component: MoreComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/settings',
      component: SettingsComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'change-password',
      component: ChangePasswordComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/transaction-list',
      component: TransactionListComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/favorite-list',
      component: FavoriteSaloonsListComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/about',
      component:AboutComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/terms-condition',
      component: TermsConditionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/privacy-policy',
      component: PrivacyPolicyComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/contact-us',
      component: ContactUsComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/review-rating',
      component: ReviewRatingComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'rate-salon',
      component: RateSalonComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'upcoming-appointment',
      component: UpcomingAppointmentComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'user-appointment',
      component: UserAppointmentComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'user',
      component: UserComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/edit-profile',
      component: EditSaloonProfileComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'more/services',
      component: ServiceComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'chat',
      component: ChatPanelComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'employee-list',
      component: EmployeeListComponent,
      canActivate:[AuthGuardService]
    }
 
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
