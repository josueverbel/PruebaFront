import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BookCrudComponent } from './book-crud/book-crud.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: "", component: BookComponent}];


@NgModule({
  declarations: [
    BookComponent,
    BookCrudComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule

  ]
})
export class BookModule { }
