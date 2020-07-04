import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  userName: string;
  password: string;
  invalidUser: boolean = false;
  ngOnInit(): void {}

  login() {
    console.log("User name : ", this.userName);
    console.log("Password : ", this.password);

    if (this.userName == "vivek" && this.password == "1234") {
      this.invalidUser = false;
      this.router.navigate(["/content"], { relativeTo: this.route });
      localStorage.setItem("username",this.userName)
      localStorage.setItem("password",this.password)
    }
    else
    {
      this.invalidUser = true;
    }
  }

}
