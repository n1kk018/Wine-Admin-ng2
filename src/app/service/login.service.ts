import { Injectable}    from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Admin } from '../entities/admin';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  private loginUrl = 'http://localhost:5000/wine/admin';
  private headers = new Headers({'Content-type':'application/json'});

  constructor(private http: Http) {
    // empty
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured: ' + error.status + ' | '
      + error.message);
    return Promise.reject(error.message || error);
  }


  getLogin(login: string, password: string): Promise<Admin> {
    const url = `${this.loginUrl}/${login}/${password}`;
    return this.http.get(url).toPromise()
      .then(response => response.json() as Admin)
      .catch(this.handleError);
  }

}
