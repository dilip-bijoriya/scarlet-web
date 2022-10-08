import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutRoutingModule } from './simple-layout-routing.module';
import { SimpleLayoutComponent } from './simple-layout.component';
import { SalonsComponent, BlogComponent, ContactUsComponent, HomeComponent, BlogDetailsComponent } from 'src/app/components/simple-layout/simple-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SimpleLayoutComponent,
    SalonsComponent,
    BlogComponent,
    ContactUsComponent,
    HomeComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SimpleLayoutRoutingModule,
    SharedModule, 
    RouterModule
  ]
})
export class SimpleLayoutModule { }
