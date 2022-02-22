import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/services';
import Swal from 'sweetalert2';
import { BookCrudComponent } from './book-crud/book-crud.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public books : any [] = [];
  public modalRef: any;

  constructor(private http: BookService, private modalService: NgbModal) { 
    this.getBooks();
  }

  ngOnInit(): void {
  }
  getBooks(){
    this.http.get().subscribe(
      (res :any) => {
        this.books = res;
        console.log(res);
        
      }
    )
  }
 
  public create() {
 
    this.modalRef = this.modalService.open(BookCrudComponent, {
      backdrop: "static",
      keyboard: false,
      
    });
    this.modalRef.componentInstance.action = 'create';
    this.modalRef.componentInstance.enabled = true;
  
    this.modalRef.result.then(
      (res) => {
       if (res?.status) {
         this.getBooks();
        Swal.fire({
          type: "success",
          title: 'Operacion Exitosa',
          text: 'Se han guardado los datos del libro',
        });
       }
       
       
      },
      (err) => {
       
      }
    );
  }
}
