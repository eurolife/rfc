import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RFCsComponent } from './rfcs/rfcs.component';
import { MyTasksComponent } from './reports/my-tasks/my-tasks.component';
import { OverdueTasksComponent } from './reports/overdue-tasks/overdue-tasks.component';
import { OpenQuestionsComponent } from './reports/open-questions/open-questions.component';
import { AddComponent } from './rfcs/add/add.component';
import { MainComponent } from './rfcs/edit/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: RFCsComponent },
  { path: 'my-tasks', component: MyTasksComponent },
  { path: 'overdue-tasks', component: OverdueTasksComponent },
  { path: 'open-questions', component: OpenQuestionsComponent },
  { path: 'add', component: AddComponent },
  { path: 'rfc/:id', component: MainComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
