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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var app_constants_1 = require('../constants/app.constants');
var DataService = (function () {
    function DataService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.actionUrl = configuration.ServerWithApiUrl + 'rs/csv/';
        this.actionUrl2 = configuration.ServerWithApiUrl + 'rs/csv/vheaders/';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    /** Preferred way to retrieve data - with Observable */
    DataService.prototype.getFiles = function () {
        return this.http.get(this.actionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getVarHeaders = function () {
        return this.http.get(this.actionUrl2)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /** Optional way to retrieve data - with Promise*/
    DataService.prototype.getData = function () {
        return this.http.get(this.actionUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        //debugger;
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // Dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataservice.js.map