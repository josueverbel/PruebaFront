import { CommonModule } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { MaterialModule } from "../material/material.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateComponent } from "./date/date.component";
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatNativeDateModule } from "@angular/material/core";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

@NgModule({
  declarations: [
    BreadcrumbComponent,
    DateComponent,
    AdminDashboardComponent
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatNativeDateModule,
    RouterModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    BreadcrumbComponent,
    DateComponent,
    AdminDashboardComponent
  ]
})
export class ComponentsModule {}
