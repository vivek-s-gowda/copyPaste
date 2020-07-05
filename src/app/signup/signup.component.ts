import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../api/api.service";

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
  errorInRegister: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  createAccount() {
    console.log("user name : ", this.userName);
    console.log("password : ", this.password);
    console.log("confirm password : ", this.cPassword);
    this.apiService
      .registerUser({
        userName: this.userName.trim(),
        password: this.password.trim(),
      })
      .subscribe((res) => {
        console.log("resoponse : ", res);
        if (res) {
          this.errorInRegister = false;
          this.router.navigate(["/login"], { relativeTo: this.route });
        } else {
          this.errorInRegister = true;
        }
      });
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
