import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  userIcon:string;
  logout:boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (
      localStorage.getItem("username") == null ||
      localStorage.getItem("password") == null
    ) {
      this.router.navigate(["/login"], { relativeTo: this.route });
    } else {
      console.log("cached username : ", localStorage.getItem("username"));
      console.log("cached password : ", localStorage.getItem("password"));
      this.userIcon = localStorage.getItem("username").charAt(0);
    }
  }

  logoutToggle()
  {
    this.logout = !this.logout;
  }

  logoutFunc()
  {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    this.router.navigate(["/login"], { relativeTo: this.route });
  }
}
