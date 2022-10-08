import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LocationComponent } from './components/modal/location/location.component';
import { AddServiceComponent } from './components/modal/add-service/add-service.component';
import { HaircutAndStylingComponent } from './components/modal/haircut-and-styling/haircut-and-styling.component';
import { SelectServicesComponent } from './components/modal/select-services/select-services.component';
import { AddServiceHeaderComponent } from './components/modal/add-service-header/add-service-header.component';
import { PaymentSucessfulComponent } from './components/modal/payment-sucessful/payment-sucessful.component';
import { ScheduleAppointmentSuccessfulComponent } from './components/modal/schedule-appointment-successful/schedule-appointment-successful.component';
import { ScheduleAppointmentComponent } from './components/modal/schedule-appointment/schedule-appointment.component';
import { SelectDateComponent } from './components/modal/select-date/select-date.component';
import { SelectSpecialistsComponent } from './components/modal/select-specialists/select-specialists.component';
import { ApiService } from './services/api.service';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/modal/add-employee/add-employee.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthGuardService } from './services/auth-guard.service';
import { DataShareService } from './services/data-share.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    AddServiceComponent,
    HaircutAndStylingComponent,
    SelectServicesComponent,
    AddServiceComponent,
    AddServiceHeaderComponent,
    LocationComponent,
    PaymentSucessfulComponent,
    ScheduleAppointmentSuccessfulComponent,
    ScheduleAppointmentComponent,
    SelectDateComponent,
    SelectServicesComponent,
    SelectSpecialistsComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthGuardService, DataShareService,  { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
