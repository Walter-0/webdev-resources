import { Component } from '@angular/core';
import { ResourceService } from '../shared/resource.service';
import { Resource } from '../shared/resource';

@Component({
  selector: 'app-show-resource',
  templateUrl: './showResource.component.html',
  styleUrls: ['./showResource.component.css']
})

export class ShowResourceComponent {
  public resources: Array<Resource> = [];

  constructor (private resourceService: ResourceService) {
    this.downloadResources();
  }

  private downloadResources(): void {
    this.resourceService.getAllResources().subscribe(data => {
      data.result.forEach(resourceData => this.resources.push(
        new Resource(
          resourceData.id,
          resourceData.title,
          resourceData.description,
          resourceData.link,
          resourceData.userId)));
    });
  }
}
