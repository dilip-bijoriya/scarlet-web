import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./layout/full-layout/full-layout.module').then(m => m.FullLayoutModule)},
  { path: 'auth', loadChildren: () => import('./layout/authorization/authorization.module').then(m => m.AuthorizationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
