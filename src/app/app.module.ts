import { ArticleAddComponent } from './crud/article/article-add/article-add.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChartComponent } from './charts/chart/chart.component';
import { SpecialisteComponent } from './crud/specialiste/specialiste.component';
import { SpecialisteRdvComponent } from './crud/specialiste-rdv/specialiste-rdv.component';
import { ParentComponent } from './crud/parent/parent.component';
import { AddSpecialisteComponent } from './crud/specialiste/add-specialiste/add-specialiste.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { AddSpecialisteRdvComponent } from './crud/specialiste-rdv/add-specialiste-rdv/add-specialiste-rdv.component';
import { AddParentComponent } from './crud/parent/add-parent/add-parent.component';
import { ArticleComponent } from './crud/article/article.component';
import { NgModule } from '@angular/core';
import { RdvComponent } from './crud/rdv/rdv.component';
import { CentreComponent } from './crud/centre/centre.component';
import { EvolutionComponent } from './crud/evolution/evolution.component';
import { ForumComponent } from './crud/forum/forum.component';
import { AddForumComponent } from './crud/forum/add-forum/add-forum.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginAdminComponent,
    DashboardAdminComponent,
    PageNotFoundComponent,
    ChartComponent,
    SpecialisteComponent,
    SpecialisteRdvComponent,
    ParentComponent,
    AddSpecialisteComponent,
    AddSpecialisteRdvComponent,
    AddParentComponent,
    ArticleComponent,
    ArticleAddComponent,
    RdvComponent,
    CentreComponent,
    EvolutionComponent,
    ForumComponent,
    AddForumComponent,
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
