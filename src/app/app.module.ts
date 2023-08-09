import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/main/home/home.component';
import { AboutComponent } from './components/main/about/about.component';
import { DepartmentsComponent } from './components/main/departments/departments.component';
import { NewsComponent } from './components/main/news/news.component';
import { FamilyComponent } from './components/main/family/family.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { AddMemberComponent } from './components/admin/add-member/add-member.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminSignOutComponent } from './components/admin/admin-sign-out/admin-sign-out.component';
import { CardsComponent } from './components/admin/cards/cards.component';
import { MemberDetailsComponent } from './components/admin/member-details/member-details.component';
import { MemberListComponent } from './components/admin/member-list/member-list.component';
import { MemberUpdateComponent } from './components/admin/member-update/member-update.component';
import { ScoreCardComponent } from './components/admin/score-card/score-card.component';
import { TasksComponent } from './components/admin/tasks/tasks.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { EventsComponent } from './components/user/events/events.component';
import { UserFooterComponent } from './components/user/user-footer/user-footer.component';
import { LeaderboardComponent } from './components/user/leaderboard/leaderboard.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { TodolistComponent } from './components/user/todolist/todolist.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/main/register/register.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { AssignmentsComponent } from './components/user/assignments/assignments.component';
import { UserComponent } from './components/user/user/user.component';
import { MainComponent } from './main/main.component';
import { AssignmentComponent } from './components/user/todolist/assignment/assignment/assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    DepartmentsComponent,
    NewsComponent,
    FamilyComponent,
    ContactComponent,
    FooterComponent,
    LoginPopupComponent,
    AdminNavComponent,
    AdminSignOutComponent,
    CardsComponent,
    MemberDetailsComponent,
    MemberListComponent,
    MemberUpdateComponent,
    ScoreCardComponent,
    TasksComponent,
    AdminMainComponent,
    UserHeaderComponent,
    EventsComponent,
    UserFooterComponent,
    UserHomeComponent,
    UserHomeComponent,
    UserComponent,
    UserFooterComponent,
    UserHeaderComponent,
    AssignmentsComponent,
    LeaderboardComponent,
    TodolistComponent,
    ProfileComponent,
    RegisterComponent,
    ScoreCardComponent,
    AddMemberComponent,
    MemberDetailsComponent,
    MemberListComponent,
    MemberUpdateComponent,
    CardsComponent,
    AdminHeaderComponent,
    AdminSignOutComponent,
    TasksComponent,
    MainComponent,
    AssignmentComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports:[
    LoginPopupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
