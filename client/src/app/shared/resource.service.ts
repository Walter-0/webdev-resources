import { Injectable } from '@angular/core';
import { Resource } from './resource';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class ResourceService {
  private apiUrl = 'http://localhost:3000/';

  constructor (private http: Http) {}

  getAllResources() {
    return this.http.get(this.apiUrl + 'api/resources')
      .flatMap(function (response) {
        return response.json();
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getResourcesByTag(tag: String): void {}
  saveResource(resource: Resource): void {
    // this.http.post(this.apiUrl + 'api/resource')
  }
  deleteResource(resource: Resource): void {}
}
