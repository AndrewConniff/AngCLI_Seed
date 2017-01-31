"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_highlights_1 = require('./mock-highlights');
var testing_1 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var MockBackendHighlights = (function () {
    function MockBackendHighlights(backend) {
        this.backend = backend;
    }
    ;
    MockBackendHighlights.prototype.start = function () {
        this.backend.connections.subscribe(function (c) {
            var URL = 'http://localhost:8080/highlights';
            var heroesIdRegex = /\/heroes\/([0-9]+)/i;
            if (c.request.url === URL && c.request.method === 0) {
                c.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(mock_highlights_1.HIGHLIGHTS)
                })));
            }
        });
    };
    MockBackendHighlights = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [testing_1.MockBackend])
    ], MockBackendHighlights);
    return MockBackendHighlights;
}());
exports.MockBackendHighlights = MockBackendHighlights;
//# sourceMappingURL=mock-backend-highlights.js.map