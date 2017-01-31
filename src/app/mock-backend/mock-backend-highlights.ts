import { Injectable } from '@angular/core';
import { HIGHLIGHTS } from './mock-highlights';
import { MockBackend, MockConnection } from "@angular/http/testing";
import {ResponseOptions, Response} from "@angular/http";

@Injectable()
export class MockBackendHighlights {
    constructor (private backend: MockBackend) {};

    start(): void {
      this.backend.connections.subscribe((c: MockConnection) => {
        const URL = 'http://localhost:8080/highlights';
        let heroesIdRegex = /\/heroes\/([0-9]+)/i;

        if (c.request.url === URL && c.request.method === 0) {
            c.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(HIGHLIGHTS)
            })));
        }
    });
    }
}
