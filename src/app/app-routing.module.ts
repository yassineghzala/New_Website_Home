import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user/user.component';
import { TodolistComponent } from './components/user/todolist/todolist.component';
import { EventsComponent } from './components/user/events/events.component';
import { LeaderboardComponent } from './components/user/leaderboard/leaderboard.component';
import { AssignmentsComponent } from './components/user/assignments/assignments.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { LoggedInGuard } from './guard/logged-in.guard';


import { MainComponent } from './components/main/main/main.component';
import { DashboardComponent } from './components/admin/components/main/dashboard/dashboard.component';
import { ContentComponent } from './components/admin/components/content/content.component';
import { AlltasksComponent } from './components/admin/components/alltasks/alltasks.component';
import { EventsadminComponent } from './components/admin/components/events/events/eventsadmin.component';
import { ApplicationComponent } from './components/accounts/application/application.component';




const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"user/:id",component:UserComponent,canActivate:[LoggedInGuard]},
  {path:"user/:id/todolist",component:TodolistComponent,canActivate:[LoggedInGuard]},
  {path:"user/:id/todolist/assignments/:aid",component:AssignmentsComponent,canActivate:[LoggedInGuard]},
  {path:"user/:id/events",component:EventsComponent,canActivate:[LoggedInGuard]},
  {path:"user/:id/leaderboard",component:LeaderboardComponent,canActivate:[LoggedInGuard]},
  {path:"user/:id/settings",component:SettingsComponent,canActivate:[LoggedInGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'content', component: ContentComponent },
  { path: 'tasks', component: AlltasksComponent },
  { path: 'events', component: EventsadminComponent },
  { path: 'application', component: ApplicationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
