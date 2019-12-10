import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularCommonsModule } from '../layouts/angular-commons.module';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    AngularCommonsModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent]
})
export class PagesModule { }
