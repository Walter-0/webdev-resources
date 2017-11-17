import { Component, ViewChild, OnInit } from '@angular/core';
import { ResourceService } from '../shared/resource.service';
import { Resource } from '../shared/resource';
import { PaginationService } from '../shared/pagination.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-resource',
  templateUrl: './showResource.component.html',
  styleUrls: ['./showResource.component.css']
})

export class ShowResourceComponent implements OnInit {
  public resources: Array<Resource> = [];
  public page: Number;

  constructor(
    private resourceService: ResourceService,
    private paginationService: PaginationService,
    private activatedRoute: ActivatedRoute) {
      const pageNumber = activatedRoute.snapshot.params['id'] ?
        activatedRoute.snapshot.params['id'] : 1;

      if (this.paginationService.getCurrentPage() !== pageNumber) {
        this.paginationService.updateCurrentPage(pageNumber);
      }

      this.downloadResources();
    }

  public ngOnInit() {
    this.paginationService
      .listenForPageUpdate()
      .subscribe(pageNumber => this.handlePageUpdate(pageNumber));
  }

  public handlePageUpdate(pageNumber) {
    this.page = pageNumber;
    this.downloadResources();
  }

  private downloadResources(): void {
    this.resourceService.getAllResources(this.page).subscribe(data => {
      this.resources = [];

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
