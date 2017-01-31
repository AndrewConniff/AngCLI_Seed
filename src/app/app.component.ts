import { Component } from '@angular/core';
// import { Http } from '@angular/http';
import { MockBackendHighlights } from './mock-backend/mock-backend-highlights';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [MockBackendHighlights]
})

export class AppComponent  {
    name = 'Angular';
    constructor (private mockHighlightBackend: MockBackendHighlights) {
        this.mockHighlightBackend.start();
    }
}
