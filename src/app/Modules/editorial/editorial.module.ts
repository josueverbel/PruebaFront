import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialComponent } from '../editorial/editorial.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { EditorialCrudComponent } from './editorial-crud/editorial-crud.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "", component: EditorialComponent},
  { path: "create", component: EditorialCrudComponent}
];


@NgModule({
  declarations: [
    EditorialComponent,
    EditorialCrudComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class EditorialModule { }
