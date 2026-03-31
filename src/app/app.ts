import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { fromEvent, map, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-ut');
  showButton = false;
  scrollSub!: Subscription;
  ngOnInit() {
    this.scrollSub = fromEvent(window, 'scroll').pipe(
      throttleTime(100),
      map(() => window.scrollY > 300)
    ).subscribe(show => {
      console.log("scrolled..",show);
      this.showButton = show
    });
  }
  goToTop() {
    console.log("top button clicked");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnDestroy(){
    this.scrollSub.unsubscribe();
  }
}
