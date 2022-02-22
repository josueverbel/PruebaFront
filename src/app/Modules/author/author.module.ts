import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from '../author/author.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AuthorCrudComponent } from './author-crud/author-crud.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "", component: AuthorComponent},
  { path: "create", component: AuthorCrudComponent}
];


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorCrudComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class AuthorModule { }
