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
var highlights_service_1 = require('../services/highlights-service');
var HomeComponent = (function () {
    /**
     * TODO add the component to the
     * main module.ts not the component.
     *
     * use the @Input() object: {value1: valuetype, name: string };
     * for biondings where the content is delivered to the component
     * from the parent
     */
    function HomeComponent(dataService) {
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getHighlights().subscribe(function (highlights) { return _this.highlights = highlights; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'default-container',
            templateUrl: 'app/home/home.component.html'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [highlights_service_1.HighlightsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map