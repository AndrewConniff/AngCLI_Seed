import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IHighlight } from '../models/highlight';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';


@Injectable()
export class HighlightsService {
    private _url: string = 'http://localhost:8080/highlights';  // Add a url here to download something or load a .json file to mock results
    // private data: Observable<Array<IHighlight>>;

    constructor(private _http: Http) {
          // not a really good example
          // this.data = this.getHighlights();
    }

    public getHighlights(): Observable<IHighlight[]> {
      return this._http.get(this._url)
            .map((resp: Response) => resp.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
