"use strict";
// import { HttpModule } from '@angular/http';
var testing_1 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var data_service_1 = require('./services/data.service');
var highlights_service_1 = require('./services/highlights-service');
exports.APP_PROVIDERS = [
    data_service_1.DataService,
    highlights_service_1.HighlightsService,
    testing_1.MockBackend,
    http_1.BaseRequestOptions,
    {
        provide: http_1.Http,
        deps: [testing_1.MockBackend, http_1.BaseRequestOptions],
        useFactory: function (backend, options) { return new http_1.Http(backend, options); }
    }
];
//# sourceMappingURL=app.providers.js.map