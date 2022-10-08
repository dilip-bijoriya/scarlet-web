import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutRoutingModule } from './full-layout-routing.module';
import { FullLayoutComponent } from './full-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    FullLayoutComponent,
  ],
  imports: [
    CommonModule,
    FullLayoutRoutingModule,
    CarouselModule,
    SharedModule,
    RouterModule
  ],
  providers: []
})
export class FullLayoutModule { }
