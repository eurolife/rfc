import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RFCsComponent } from './rfcs/rfcs.component';
import { RFCsService } from './models/rfcs.service';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './core/nav/nav.component';
import { MyTasksComponent } from './reports/my-tasks/my-tasks.component';
import { OpenQuestionsComponent } from './reports/open-questions/open-questions.component';
import { OverdueTasksComponent } from './reports/overdue-tasks/overdue-tasks.component';
import { AddComponent } from './rfcs/add/add.component';
import { MainComponent } from './rfcs/edit/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    RFCsComponent,
    NavComponent,
    MyTasksComponent,
    OpenQuestionsComponent,
    OverdueTasksComponent,
    AddComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RFCsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
