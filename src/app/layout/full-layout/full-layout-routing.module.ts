import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmmentComponent, DashboardComponent } from 'src/app/components/full-layout/full-layout';
import { FullLayoutComponent } from './full-layout.component';

const routes: Routes = [
  {
    path: '',
    component:FullLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('../simple-layout/simple-layout.module').then(m => m.SimpleLayoutModule) },
      {path: 'admin', loadChildren: () => import('../admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
