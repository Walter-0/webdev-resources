import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddResourceComponent } from './addResource/addResource.component';
import { ResourceService } from './shared/resource.service';
import { ShowResourceComponent } from './showResource/showResource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormField } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddResourceComponent,
    ShowResourceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // MatFormField,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'addResource',
        component: AddResourceComponent
      },
      {
        path: 'showResources',
        component: ShowResourceComponent
      }
    ])
  ],
  providers: [ ResourceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
