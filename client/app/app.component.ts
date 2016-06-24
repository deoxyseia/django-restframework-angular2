import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,Calendar} from 'primeng/primeng';
import {Task} from './tasks/task';
import {TaskService} from './tasks/taskservice';

@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer],
	providers: [HTTP_PROVIDERS,TaskService]
})
export class AppComponent {
    
    errorMessage: string;
    
	displayDialog: boolean;

    task: Task = new PrimeTask();

    selectedTask: Task;

    newTask: boolean;

    tasks: Task[];

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.taskService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error);
    }

    showDialogToAdd() {
        this.newTask = true;
        this.task = new PrimeTask();
        this.displayDialog = true;
    }

    save() {
        if(this.newTask)
            this.tasks.push(this.task);
        else
            this.tasks[this.findSelectedCarIndex()] = this.task;

        this.task = null;
        this.displayDialog = false;
    }

    delete() {
        this.tasks.splice(this.findSelectedCarIndex(), 1);
        this.task = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newTask = false;
        this.task = this.cloneTask(event.data);
        this.displayDialog = true;
    }

    cloneTask(t: Task): Task {
        let task = new PrimeTask();
        for(let prop in t) {
            task[prop] = t[prop];
        }
        return task;
    }

    findSelectedCarIndex(): number {
        return this.tasks.indexOf(this.selectedTask);
    }
}

class PrimeTask implements Task {

    constructor(public url?, public task?, public deadline?, public active?) {}
}
