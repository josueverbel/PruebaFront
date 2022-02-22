import localesCo from "@angular/common/locales/es-CO";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import {
  registerLocaleData,
  DecimalPipe,
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";

import { AppComponent } from "./app.component";

import { InterceptRequestsService } from "./services/intercepts/intercept-requests.service";
import { MaterialModule } from "./shared/material/material.module";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown-angular7";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ComponentsModule } from "./shared/components/components.module";

registerLocaleData(localesCo);

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    InterceptRequestsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptRequestsService,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: "es-CO" },
    DecimalPipe,
    /* En caso de error de ruta, favor quitar esta línea y listo! */
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
