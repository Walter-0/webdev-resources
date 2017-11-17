import { Component, OnInit, ViewChild } from '@angular/core';
import { ResourceService } from '../../shared/resource.service';
import { Observable } from 'rxjs/Observable';
import { PaginationService } from '../../shared/pagination.service';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.css' ]
})
export class PaginationComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public numberOfItems: Number;

  public constructor(
    private apiService: ResourceService,
    private paginationService: PaginationService) {}

  public ngOnInit() {
    this.apiService.getResourcesCount()
      .subscribe(response => {
        this.numberOfItems = (response as any).count;
      });

    this.paginator.pageIndex = this.paginationService.getCurrentPage() - 1;
    this.paginator.page.subscribe(
      (pageNumber) => this.updatePage(pageNumber.pageIndex + 1)
    );
  }

  public updatePage(pageNumber) {
    this.paginationService.updateCurrentPage(pageNumber);
  }

  private calculateNumberOfPages(response) {
    console.log(response);
    this.numberOfItems = response.count;
  }
}
