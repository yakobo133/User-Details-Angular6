import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import {MatButtonModule,MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StorageServiceModule,
    MatButtonModule,
    MatIconModule
   
  ],
  exports: [
  
    AppRoutingModule,
    MatButtonModule,
    MatIconModule
   
  ],
  providers: [HomeComponent,UserDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
