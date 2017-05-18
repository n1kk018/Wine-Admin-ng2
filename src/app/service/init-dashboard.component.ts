import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InitDashboardService {
    private dashInitUrl = 'http://localhost:5000/wine/admin/dashboard/init';
    private headers = new Headers({'Content-type':'application/json'});

    constructor(private http: Http) {
      // empty
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occured: ' + error.status + ' | '
        + error.message);
      return Promise.reject(error.message || error);
    }

    // initDashboard():Promise<any> {
    //     return null
    // }


}
