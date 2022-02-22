import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: DashboardComponent },
     
      { path: "books",
        loadChildren: () => import("../book/book.module").then(m => m.BookModule),
      },
      { path: "editorial",
        loadChildren: () => import("../editorial/editorial.module").then(m => m.EditorialModule)
      },
      { path: "authors",
        loadChildren: () => import("../author/author.module").then(m => m.AuthorModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
