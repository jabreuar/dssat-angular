import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DSSATClientService {

  basePath = "http://localhost:3000/api/";
  //jdssatUrl = "http://localhost:3000/api/tool/?tool=XBuild/XBuild.exe";
  jdssatUrl = "http://localhost:3000/api/experiments/Maize";
  
  constructor(private http: HttpClient) { }

  getExperiments(crop) {
    return this.http.get(this.jdssatUrl);
  }

  openExternalTool() {
    return this.http.get("http://localhost:3000/api/tool/?tool=XBuild/XBuild.exe");
  }
}
