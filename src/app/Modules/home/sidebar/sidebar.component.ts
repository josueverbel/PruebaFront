import { Component, Input, OnInit } from "@angular/core";

import { Constant } from "../../../shared/constants";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @Input() menus = [  ];

  public samplePagesCollapsed = true;
  
  constructor() {}

  ngOnInit() {
   
  }
}
