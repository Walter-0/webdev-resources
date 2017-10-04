import { Injectable } from '@angular/core';
import { Resource } from './resource';
import { HttpModule } from '@angular/http';

@Injectable()
export class ResourceService {
  private apiUrl = 'http://localhost:3000/'

  getAllResources(): void {}
  getResourcesByTag(tag: String): void {}
  saveResource(resource: Resource): void {

  }
  deleteResource(resource: Resource): void {}
}
