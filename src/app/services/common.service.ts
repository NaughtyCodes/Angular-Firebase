import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  getCountryList(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
    //.map(this.handleData)
    //.catch(this.handleError);
  }

}
