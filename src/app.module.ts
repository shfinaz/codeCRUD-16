import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { AddTutorialComponent } from './app/components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './app/components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './app/components/tutorials-list/tutorials-list.component';
import { AppRoutingModule } from './app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }