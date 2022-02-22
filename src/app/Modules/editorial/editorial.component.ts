import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditorialService } from 'src/app/services';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
public editorials : any [] = [];
  constructor(private http: EditorialService,     private router: Router,
    ) {
    this.getEditorials();
   }

  ngOnInit(): void {
  }
  getEditorials(){
    this.http.get().subscribe(
      (res :any) => {
        this.editorials = res;
        console.log(res);
        
      }
    )
  }
  create(){
    this.router.navigate(['/editorial/create']);
  }
}
