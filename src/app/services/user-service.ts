import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$!: Observable<any>;
  constructor(private http: HttpClient) {
this.user$ = this.http.get<any>('https://dummyjson.com/users').pipe(map(item => item.users),shareReplay(1));
  }

  getUsers() {
    return this.user$;
  }
}
