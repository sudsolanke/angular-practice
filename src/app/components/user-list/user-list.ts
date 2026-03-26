import { Component, signal } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  userData = signal<User[]>([]);
  destroy$ = new Subject();
  constructor(private userService: UserService) {
    
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

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
