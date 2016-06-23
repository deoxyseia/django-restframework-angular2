import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Task} from '../../app/tasks/task';

@Injectable()
export class TaskService {

    constructor(private http: Http) {}

    getTasks() {
        return this.http.get('http://127.0.0.1:8000/tasks.json')
                    .toPromise()
                    .then(res => <Task[]> res.json().results)
                    .then(data => { return data; });
    }
}
