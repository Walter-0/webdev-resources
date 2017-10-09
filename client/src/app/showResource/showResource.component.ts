import { Component } from '@angular/core';
import { ResourceService } from '../shared/resource.service';
import { Resource } from '../shared/resource';

@Component({
  selector: 'app-show-resource',
  templateUrl: './showResource.component.html',
  styleUrls: ['./showResource.component.css']
})

export class ShowResourceComponent {
  resources = [];

  constructor (private resourceService: ResourceService) {
    this.resourceService.getAllResources().subscribe(data => {
      const resourceData = data as Resource;
      this.resources.push(
        new Resource(resourceData.id, resourceData.title, resourceData.description, resourceData.link, resourceData.userId)
      );
    });
  }
}
