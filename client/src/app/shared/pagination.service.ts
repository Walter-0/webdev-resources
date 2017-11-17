import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class PaginationService {
  private pageObserver: Subject<any>;
  private currentPage;

  public constructor(private router: Router) {}

  public updateCurrentPage(page) {
    this.currentPage = page;
    this.router.navigate(['showResources/', page]);
    this.pageObserver.next(this.currentPage);
  }

  public getCurrentPage() {
    return this.currentPage;
  }

  public listenForPageUpdate() {
    if (!this.pageObserver) {
      this.pageObserver = new Subject();
    }

    return this.pageObserver;
  }
}
