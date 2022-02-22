import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public menu = [
    {name: 'Inicio', link: '/', icon: 'fa fa-home'},
    {name:'Autores', link:'/authors', icon:'fa fa-users'},
    {name:'Libros', link:'/books', icon:'fa fa-book'},
    {name:'Editoriales', link:'/editorial', icon:'fa fa-pencil-square-o'},
   
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
