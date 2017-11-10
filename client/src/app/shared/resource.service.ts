import { Injectable } from '@angular/core';
import { Resource } from './resource';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ResourceService {
  private apiUrl = 'http://localhost:3000/';

  constructor (private http: HttpClient) {}

  public getAllResources(): any {
    return this.http.get(this.apiUrl + 'api/resources');
  }

  public saveResource(resource: Resource): void {
    this.http
      .post(this.apiUrl + 'api/resources', resource)
      .subscribe((response) => console.log(response), this.handleError);
  }

  public getResourcesByTag(tag: String): void {}

  public deleteResource(resource: Resource): void {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
