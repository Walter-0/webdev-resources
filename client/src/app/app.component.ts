import { Component } from '@angular/core';
import { Resource } from './resource';
import { ResourceService } from './resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private resourceService: ResourceService) {
    console.log('created');
  }

  newResource: Resource = {
    id: null,
    title: '',
    description: '',
    url: '',
    userId: ''
  };

  saveResource(): void {
    this.resourceService.saveResource(this.newResource);
    this.reset();
  }

  reset(): void {
    this.newResource.id = null;
    this.newResource.title = '';
    this.newResource.description = '';
    this.newResource.url = '';
    this.newResource.userId = '';
  }
}
