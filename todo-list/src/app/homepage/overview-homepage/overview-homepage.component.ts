import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';


@Component({
  selector: 'app-overview-homepage',
  templateUrl: './overview-homepage.component.html',
  styleUrls: ['./overview-homepage.component.css']
})
export class OverviewHomepageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openLogin(): void {
    const loginRef = this.dialog.open(LoginDialogComponent, {
      width: '40%',
      height: '90%',
    });
  }

  openSignUp() {
    const signUpRef = this.dialog.open(SignUpDialogComponent, {
      width: '40%',
      height: '90%',
    });
  }

}
