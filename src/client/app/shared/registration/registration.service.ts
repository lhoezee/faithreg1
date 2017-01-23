import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../models/student-model';

// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class RegistrationService {

    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(private http: Http) {
    }

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string[]} The Observable for the HTTP request.
     */
    get(): Observable<string[]> {
        return this.http.get('/assets/data.json')
            .map((res: Response) => res.json())
            //              .do(data => console.log('server data:', data))  // debug
            .catch(this.handleError);
    }

    post (body: Object) {
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('http://backend.faithreg.webdev.thecodify.com/registrations/', bodyString, options)
            .map((res:Response) => res.json());
    }

    /**
     * Handle HTTP error
     */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

