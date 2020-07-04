import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  userName: string;
  password: string;
  cPassword: string;
  invalidEmail: boolean;
  passwordError: boolean;

  constructor() {}

  ngOnInit(): void {}

  createAccount() {
    console.log("user name : ", this.userName);
    console.log("password : ", this.password);
    console.log("confirm password : ", this.cPassword);
  }

  ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      console.log("E-mail is in correct form ");
      this.invalidEmail = false;
    } else {
      console.log("Incorrect E-mail");
      this.invalidEmail = true;
    }
  }

  checkPassword() {
    if (this.password != this.cPassword) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
    }
  }
}
