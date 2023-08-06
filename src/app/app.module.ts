import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
