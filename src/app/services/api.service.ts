import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class ApiService {
    public endpoint = environment.apiUrl;
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'device_type': 'web',
            'device_id': '111',
            'language': 'en',
            'version': '1.0.0',
            'current_country': 'India',
            'current_time_zone': '',
            'lat': '22.12541',
            'lng': '22.12541'
        })
    };

    constructor(private http: HttpClient, private cookieService: CookieService) { }
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
    get(url: any): Promise<any> {
        return this.http.get(this.endpoint + url, this.getHeaders()).toPromise()
    }

    post(url: any, body: any): Promise<any> {
        return this.http.post<any>(this.endpoint + url, body, this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        ).toPromise()
    }

    handleError(error: any) {
        // console.log(error)
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(error.error);
    }

    delete(url: any): Observable<any> {
        return this.http.delete<any>(this.endpoint + url, this.getHeaders()).pipe(
            map(this.extractData));
    }

    getHeaders() {
        if (this.cookieService.check('scarlet_website')) {
            const user = JSON.parse(this.cookieService.get('scarlet_website'));
            this.httpOptions = {
                headers: new HttpHeaders({
                    'Authorization': user.Authorization,
                    'Content-Type': 'application/json',
                    'device_type': 'web',
                    'device_id': '111',
                    'language': 'en',
                    'version': '1.0.0',
                    'current_country': 'India',
                    'current_time_zone': '',
                    'lat': '22.12541',
                    'lng': '22.12541'
                })
            };
        }
        return this.httpOptions;
    }
    
    openGetApi(apiURL: string) {
        return this.http.get(apiURL).toPromise();
      }
    getLoggedInUser() {
        if (this.cookieService.check('scarlet_website')) {
          return JSON.parse(this.cookieService.get('scarlet_website'));
        }
        return undefined;
      }
}