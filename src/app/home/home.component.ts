import { Injectable, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IHighlight } from '../models/highlight';
import { HighlightsService } from '../services/highlights-service';
@Component({
    selector: 'default-container',
    templateUrl: 'home.component.html'
})

@Injectable()
export class HomeComponent implements OnInit {
  errorMessage: string;
  highlights: IHighlight[];
    /**
     * TODO add the component to the
     * main module.ts not the component.
     *
     * use the @Input() object: {value1: valuetype, name: string };
     * for biondings where the content is delivered to the component
     * from the parent
     */
    constructor(private dataService: HighlightsService) {}
    ngOnInit() {
        this.dataService.getHighlights().subscribe(
            (highlights: IHighlight[]) => this.highlights = highlights,
            (error: any) => this.errorMessage = error);
    }
}
