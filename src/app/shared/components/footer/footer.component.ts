import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Constant } from "src/app/shared/constants";
import Swal from "sweetalert2";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  public hoy = new Date();
  public user: any;
  public visible;
  public version = Constant.VERSION;
  constructor(private router: Router,
    private toastr: ToastrService,) {}

  ngOnInit() {
    
  }
  public now () {
    return new Date();
  }
 
 
 
  
 
}
