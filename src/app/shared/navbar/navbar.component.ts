import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
 
  @Input() isLogedIn!: boolean;
  @Input() isRegistered!: boolean;

  LogOutUser() {
    this.auth.logout();
    this.isLogedIn = false;
    this.isRegistered = false;
  }
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
