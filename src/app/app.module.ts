import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { EventsComponent } from './components/user/events/events.component';
import { UserFooterComponent } from './components/user/user-footer/user-footer.component';
import { LeaderboardComponent } from './components/user/leaderboard/leaderboard.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { TodolistComponent } from './components/user/todolist/todolist.component';
import { ProfileComponent } from './components/user/profile/profile.component';

import { SettingsComponent } from './components/user/settings/settings.component';
import { AssignmentsComponent } from './components/user/assignments/assignments.component';
import { UserComponent } from './components/user/user/user.component';
import { MainComponent } from './components/main/main/main.component';
import { AssignmentComponent } from './components/user/todolist/assignment/assignment/assignment.component';

import { AnimationTypewriterComponent } from './components/main/home/animation/animation-typewriter.component';

import { PointsPopupComponent } from './components/user/user-home/points/points-popup/points-popup.component';
import { LoginPopupComponent } from './components/accounts/login-popup/login-popup.component';
import { RegisterComponent } from './components/accounts/register/register.component';
import { DashboardComponent } from './components/admin/components/main/dashboard/dashboard.component';
import { GeneralInfoCardsComponent } from './components/admin/components/main/info_cards/general-info-cards/general-info-cards.component';
import { RecentTasksComponent } from './components/admin/components/main/recent-tasks/recent-tasks.component';
import { LeaderBoardComponent } from './components/admin/components/main/leader-board/leader-board.component';
import { TaskComponent } from './components/admin/components/main/recent-tasks/tasks/task/task.component';
import { PasswordPopupComponent } from './components/admin/popups/pop_ups/password-popup/password-popup.component';
import { MemberComponent } from './components/admin/components/main/leader-board/member/member/member.component';
import { ScorecardPopupComponent } from './components/admin/popups/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from './components/admin/popups/pop_ups/signout-popup/signout-popup.component';
import { ContentComponent } from './components/admin/components/content/content.component';
import { AlltasksComponent } from './components/admin/components/alltasks/alltasks.component';
import { SharedComponentComponent } from './components/admin/popups/shared-component/shared-component.component';
import { AddPopupComponent } from './components/admin/popups/shared_popups/add-popup/add-popup.component';
import { DeletePopupComponent } from './components/admin/popups/shared_popups/delete-popup/delete-popup.component';
import { ModifyPopupComponent } from './components/admin/popups/shared_popups/modify-popup/modify-popup.component';
import { DetailsPopupComponent } from './components/admin/popups/shared_popups/details-popup/details-popup.component';
import { MemberCardComponent } from './components/admin/components/main/members/member-card/member-card.component';
import { EventsadminComponent } from './components/admin/components/events/events/eventsadmin.component';
import { AddMemberPopupComponent } from './components/admin/components/main/members/add-member-popup/add-member-popup.component';
import { SharedComponentLabelComponent } from './components/admin/popups/shared-component-label/shared-component-label.component';
import { SingleComponentComponent } from './components/admin/components/content/single-component/single-component.component';
import { ApplicationComponent } from './components/accounts/application/application.component';


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

    UserHeaderComponent,
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

    MainComponent,
    AssignmentComponent,
    SettingsComponent,
    AppComponent,
    DashboardComponent,
    GeneralInfoCardsComponent,
    RecentTasksComponent,
    LeaderBoardComponent,
    TaskComponent,
    MemberComponent,
    PasswordPopupComponent,
    ScorecardPopupComponent,
    SignoutPopupComponent,
    ContentComponent,
    AlltasksComponent,
    SharedComponentComponent,
    AddPopupComponent,
    DeletePopupComponent,
    ModifyPopupComponent,
    DetailsPopupComponent,
    MemberCardComponent,
    EventsComponent,
    EventsadminComponent,
    AddMemberPopupComponent,
    SharedComponentLabelComponent,
    AnimationTypewriterComponent,
    SingleComponentComponent,
    ApplicationComponent,
    PointsPopupComponent
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
    HttpClientModule
  ],
  exports: [LoginPopupComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
})
export class AppModule {}
