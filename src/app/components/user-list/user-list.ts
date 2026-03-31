import { Component, signal } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  userData = signal<User[]>([]);
  destroy$ = new Subject<void>();
  constructor(private userService: UserService,private router:Router) {
    
  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.userData.set(response);
      console.log("userdata: ",this.userData());
    });
  }

  showSharedSubCompo(){
    this.router.navigate(['shared-data']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
