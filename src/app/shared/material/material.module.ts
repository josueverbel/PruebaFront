import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
