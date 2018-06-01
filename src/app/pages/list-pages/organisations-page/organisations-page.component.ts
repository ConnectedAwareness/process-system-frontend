import { Component, OnInit } from "@angular/core";
import { LogService } from "../../../login/services/log.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-organisations-page",
  templateUrl: "./organisations-page.component.html",
  styleUrls: ["./organisations-page.component.scss"]
})
export class OrganisationsPageComponent implements OnInit {
  constructor(private _logService: LogService, private router: Router) {}

  ngOnInit() {
    if (!this._logService.isUserSet()) {
      this.router.navigate(["/"])
    } else {
      
    }
  }
}
