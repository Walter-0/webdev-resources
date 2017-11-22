import { Component, ViewChild } from '@angular/core';
import { ResourceService } from '../shared/resource.service';
import { Resource } from '../shared/resource';
import { PaginationService } from '../shared/pagination.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-resources',
  templateUrl: './search-resources.component.html',
  styleUrls: ['./search-resources.component.css']
})
export class SearchResourcesComponent {
  public resources: Array<Resource> = [];
  public term: String = '';

  constructor(private resourceService: ResourceService) {
      this.downloadResources();
  }

  public downloadResources(): void {
    this.resourceService.searchResources(this.term).subscribe(results => {
      this.resources = [];

      results.forEach(resourceData => this.resources.push(
        new Resource(
          resourceData.id,
          resourceData.title,
          resourceData.description,
          resourceData.link,
          resourceData.userId)));
    });
  }
}
