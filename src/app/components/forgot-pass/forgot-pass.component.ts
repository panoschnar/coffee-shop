import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css'],
})
export class ForgotPassComponent implements OnInit {
  email: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  fotgotPass() {
    this.auth.forgotPass(this.email);
    this.email = '';
  }
}
