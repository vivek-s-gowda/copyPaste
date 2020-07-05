import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../api/api.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  userIcon:string;
  logout:boolean = false;
  content="";
  constructor(private route: ActivatedRoute, private router: Router,private apiService: ApiService) {}

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
      this.apiService
      .getContent({userName:localStorage.getItem("username") })
      .subscribe((res) => {
        this.content = res.content
      });
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

  update(data)
  {
    console.log("update :::::",data);
    this.apiService
    .updateContent({ content:data,user:localStorage.getItem("username") })
    .subscribe((res) => {});
  }
}
