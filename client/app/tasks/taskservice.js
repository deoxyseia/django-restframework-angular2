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
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.snippetsUrl = "http://127.0.0.1:8000/tasks.json";
    }
    // getTasks() {
    //     return this.http.get('http://127.0.0.1:8000/tasks.json')
    //                 .toPromise()
    //                 .then(res => <Task[]> res.json().results)
    //                 .then(data => { return data; });
    // }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.snippetsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TaskService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.results || {};
    };
    TaskService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=taskservice.js.map