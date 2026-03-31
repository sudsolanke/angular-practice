import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-share-sub',
  imports: [],
  templateUrl: './share-sub.html',
  styleUrl: './share-sub.scss',
})
export class ShareSub {
  sharedUserData = signal<User[]>([]);
  destroy$ = new Subject<void>();
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.sharedUserData.set(response);
      console.log("sharedUserData: ", this.sharedUserData());
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
