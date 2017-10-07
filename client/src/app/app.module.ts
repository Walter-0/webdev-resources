import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddResourceComponent } from './addResource/addResource.component';
import { ResourceService } from './shared/resource.service';
import { ShowResourceComponent } from './showResource/showResource.component';

@NgModule({
  declarations: [
    AppComponent,
    AddResourceComponent,
    ShowResourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'addResource',
        component: AddResourceComponent
      }
    ])
  ],
  providers: [ ResourceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
