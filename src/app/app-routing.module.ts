import { AddSpecialisteComponent } from './crud/specialiste/add-specialiste/add-specialiste.component';
import { SpecialisteComponent } from './crud/specialiste/specialiste.component';
import { ChartComponent } from './charts/chart/chart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginGuard } from './guards/login.guard';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent,canActivate:[LoginGuard]},
  {path:"pageNotFound",component:PageNotFoundComponent},
  {path:"login",component:LoginAdminComponent,canActivate:[LoginGuard]},
  {path:"dashboardAdmin",component:DashboardAdminComponent,canActivate:[AuthGuard]},
  {path:"addSpecialiste",component:AddSpecialisteComponent},
  {path:"specialiste",component:SpecialisteComponent},

  {path:"**",redirectTo:"pageNotFound",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
