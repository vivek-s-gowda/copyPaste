import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../api/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}
  userName: string;
  password: string;
  invalidUser: boolean = false;
  ngOnInit(): void {}

  login() {
    console.log("User name : ", this.userName);
    console.log("Password : ", this.password);
    this.apiService
      .getUser({ userName: this.userName.trim(), password: this.password.trim() })
      .subscribe((res) => {
        console.log("resoponse : ", res);
        if (this.userName == res.email && this.password == res.password) {
          this.invalidUser = false;
          this.router.navigate(["/content"], { relativeTo: this.route });
          localStorage.setItem("username", this.userName);
          localStorage.setItem("password", this.password);
        } else {
          this.invalidUser = true;
        }
      });
  }

  signUp()
  {
    this.router.navigate(["/signup"], { relativeTo: this.route });
  }
}
