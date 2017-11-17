import { Injectable } from '@angular/core';
import { Resource } from './resource';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ResourceService {
  constructor (private http: HttpClient) {}

  public getAllResources(page?: Number): any {
    return this.http.get(`/api/resources/${page ? page : ''}`);
  }

  public saveResource(resource: Resource): void {
    this.http
      .post('/api/resources', resource)
      .subscribe((response) => console.log(response), this.handleError);
  }

  public getResourcesCount() {
    return this.http.get('/api/resources');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
