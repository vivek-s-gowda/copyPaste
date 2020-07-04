import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ContentComponent } from "./content/content.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: "", redirectTo: "/content", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "content", component: ContentComponent },
  { path: "signup", component: SignupComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
