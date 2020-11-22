import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

constructor() { }
  private idStore: string = 'ijpxNJLM732vm8AeajMR';
  private backendUrl: string = `http://us-central1-test-b7665.cloudfunctions.net/api/stores/${this.idStore}`;

  get BackendUrl(){ return this.backendUrl; }
}
