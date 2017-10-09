import { Component, OnInit } from '@angular/core';
import { Resource } from '../shared/resource';
import { ResourceService } from '../shared/resource.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './addResource.component.html',
  styleUrls: ['./addResource.component.css']
})

export class AddResourceComponent {
  constructor (private resourceService: ResourceService) {
    console.log('created');
  }

  newResource: Resource = new Resource(0, '', '', '', '');

  saveResource(): void {
    this.resourceService.saveResource(this.newResource);
    this.reset();
  }

  reset(): void {
    this.newResource.id = null;
    this.newResource.title = '';
    this.newResource.description = '';
    this.newResource.link = '';
    this.newResource.userId = '';
  }
}
