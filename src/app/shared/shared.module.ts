import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, BlogListComponent, SalonsListComponent } from './shared';
import { JoinUsNowComponent } from '../directives/join-us-now/join-us-now.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoggedInHeaderComponent } from './logged-in-header/logged-in-header.component';
import { LoggedInSidebarComponent } from './logged-in-sidebar/logged-in-sidebar.component';
@NgModule({
  declarations: [
    HeaderComponent,
    BlogListComponent,
    JoinUsNowComponent,
    FooterComponent,
    SalonsListComponent,
    LoggedInHeaderComponent,
    LoggedInSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports : [
    HeaderComponent,
    BlogListComponent,
    JoinUsNowComponent,
    FooterComponent,
    SalonsListComponent,
    LoggedInHeaderComponent,
    LoggedInSidebarComponent,
  ]
})
export class SharedModule { }
