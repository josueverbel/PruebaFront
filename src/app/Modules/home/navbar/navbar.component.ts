import Swal from "sweetalert2";
import { Component, OnInit } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

import { Constant } from "../../../shared/constants";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  public time = new Date();
  public timer;
  public logo;
  public user: any;
  public username;

  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector(".sidebar-offcanvas").classList.add("active");
    } else {
      document.querySelector(".sidebar-offcanvas").classList.remove("active");
    }
  }

  constructor(
    config: NgbDropdownConfig,
    private router: Router,
    private toastr: ToastrService,

  ) {
    config.placement = "bottom-right";
  }

  ngOnInit() {
  }
  
 
 

 

 

 
 
 
  
}
