import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: number;
  interval: any;
  constructor(private router: Router) {}

  /**
   * Method that sets timer to clear local storage
   */
  setTimer() {
    this.timer = 1;
    this.interval = setInterval(() => {
      this.timer++;
      if (this.timer > 50000) {
        alert('session expired');
        this.router.navigate(['login']);
        localStorage.clear();
        this.stopInterval();
      }
    }, 1000);
  }

  /**
   * Method that clears interval and sets timer
   */
  stopInterval() {
    clearInterval(this.interval);
    this.timer = 1;
  }
}
