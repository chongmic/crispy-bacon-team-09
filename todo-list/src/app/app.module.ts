import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireMessagingModule } from '@angular/fire/messaging';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { OverviewHomepageComponent } from './homepage/overview-homepage/overview-homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';

import { LoginDialogComponent } from './homepage/login-dialog/login-dialog.component';
import { SignUpDialogComponent } from './homepage/sign-up-dialog/sign-up-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewHomepageComponent,
    LoginDialogComponent,
    SignUpDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    SignUpDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // AngularFireStorageModule,
    // AngularFireMessagingModule,
    // AngularFireDatabaseModule,
    // AngularFireFunctionsModule
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
