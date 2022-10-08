import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent, BlogDetailsComponent, ContactUsComponent, HomeComponent, SalonsComponent } from 'src/app/components/simple-layout/simple-layout';
import { SimpleLayoutComponent } from './simple-layout.component';

const routes: Routes = [

  {
    path:'',
    component: SimpleLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch :'full'
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'blog',
        component:BlogComponent
      },
      {
        path:'contact-us',
        component:ContactUsComponent
      },
      {
        path:'salons',
        component:SalonsComponent
      }, 
       {
        path:'blog-details',
        component:BlogDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleLayoutRoutingModule { }
