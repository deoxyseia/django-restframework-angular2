import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Task} from '../../app/tasks/task';
import { Observable }  from 'rxjs/Observable';

@Injectable()
export class TaskService {

    constructor(private http: Http) {}

    private snippetsUrl: string = "http://127.0.0.1:8000/tasks.json";

    // getTasks() {
    //     return this.http.get('http://127.0.0.1:8000/tasks.json')
    //                 .toPromise()
    //                 .then(res => <Task[]> res.json().results)
    //                 .then(data => { return data; });
    // }


    getTasks(): Observable<Task[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.snippetsUrl)
                   .map(this.extractData)
                   .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();

        console.log(body);

        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
