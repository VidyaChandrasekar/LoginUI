import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    constructor( private _http: Http) {

    }

    getAll() {
       return this._http.get('http://localhost:4000/Users', this.jwt()).pipe(map((response: Response) => response.json()));
    }

    getById(_id: string) {
        return this._http.get('http://localhost:4000/Users/' + _id, this.jwt()).pipe(map((response: Response) => response.json()));
    }

    register(user: User) {
        return this._http.post('http://localhost:4000/Users/register', user, this.jwt());
    }

    update(user: User) {
        return this._http.put('http://localhost:4000/Users/' + user._id, user, this.jwt());
    }

    delete(id: string) {
        return this._http.delete('http://localhost:4000/Users/' + id, this.jwt());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
