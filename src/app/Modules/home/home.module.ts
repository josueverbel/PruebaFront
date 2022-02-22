import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    CommonModule,
    ComponentsModule,
    SharedModule,
    NgbModule,
  ]
})
export class HomeModule { }
