import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorService } from 'src/app/services';
import Swal from 'sweetalert2';
import { AuthorCrudComponent } from './author-crud/author-crud.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})


export class AuthorComponent implements OnInit {
  public authors : any[] = [];
  public modalRef: any;

  constructor(private http: AuthorService, private modalService: NgbModal,     private router: Router,
    ) { 
    this.getAuthores();
  }

  ngOnInit(): void {
  }

  getAuthores(){
    this.http.get().subscribe(
      (res :any) => {
        this.authors = res;
        console.log(res);
        
      }
    )
  }
  public create() {
 
    this.router.navigate(['/authors/create']);
  }
}
