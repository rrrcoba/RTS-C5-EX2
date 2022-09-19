import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rts-c5-ex2';
  isLoggedIn = true;
  username?: string;

  // constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    // this.isLoggedIn = !!this.tokenStorageService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.username = user.username;
    // }
  }

  logout():void {
    // this.tokenStorageService.signOut();
    // window.location.reload();
    // window.location.href="/login";
  }
}
