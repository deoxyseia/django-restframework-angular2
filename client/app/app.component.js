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
var primeng_1 = require('primeng/primeng');
var taskservice_1 = require('./tasks/taskservice');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.task = new PrimeTask();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return _this.errorMessage = error; });
        console.log(this.tasks);
    };
    AppComponent.prototype.showDialogToAdd = function () {
        this.newTask = true;
        this.task = new PrimeTask();
        this.displayDialog = true;
    };
    AppComponent.prototype.save = function () {
        if (this.newTask)
            this.tasks.push(this.task);
        else
            this.tasks[this.findSelectedCarIndex()] = this.task;
        this.task = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.delete = function () {
        this.tasks.splice(this.findSelectedCarIndex(), 1);
        this.task = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.onRowSelect = function (event) {
        this.newTask = false;
        this.task = this.cloneTask(event.data);
        this.displayDialog = true;
    };
    AppComponent.prototype.cloneTask = function (t) {
        var task = new PrimeTask();
        for (var prop in t) {
            task[prop] = t[prop];
        }
        return task;
    };
    AppComponent.prototype.findSelectedCarIndex = function () {
        return this.tasks.indexOf(this.selectedTask);
    };
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/app.component.html',
            selector: 'my-app',
            directives: [primeng_1.InputText, primeng_1.DataTable, primeng_1.Button, primeng_1.Dialog, primeng_1.Column, primeng_1.Header, primeng_1.Footer],
            providers: [http_1.HTTP_PROVIDERS, taskservice_1.TaskService]
        }), 
        __metadata('design:paramtypes', [taskservice_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PrimeTask = (function () {
    function PrimeTask(task, deadline, active) {
        this.task = task;
        this.deadline = deadline;
        this.active = active;
    }
    return PrimeTask;
}());
//# sourceMappingURL=app.component.js.map