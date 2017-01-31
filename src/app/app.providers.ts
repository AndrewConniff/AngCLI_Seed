// import { HttpModule } from '@angular/http';
import { MockBackend } from "@angular/http/testing";
import { BaseRequestOptions, Http } from "@angular/http";

import { DataService } from './services/data.service';
import { HighlightsService } from './services/highlights-service';

export const APP_PROVIDERS = [
      DataService
      , HighlightsService
    // , HttpModule
    , MockBackend
    , BaseRequestOptions
    , {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory: backendFactory
    }
];

export function backendFactory(backend: MockBackend, options: BaseRequestOptions) {
    return new Http(backend, options);
}
