import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get<any>('https://dummyjson.com/users').pipe(map(item => item.users));
  }
}
