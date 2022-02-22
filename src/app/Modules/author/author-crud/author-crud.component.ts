import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthorService, HelperService } from 'src/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-crud',
  templateUrl: './author-crud.component.html',
  styleUrls: ['./author-crud.component.scss']
})
export class AuthorCrudComponent implements OnInit {
  author : any;
  enabled = true;
  loading = false;
  public submitted = false;

  public form: FormGroup;
  public dropdownSettings;
  public dropdownAuthorSettings;
  public errorsDb = [];
  public date = new Date();
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private helper: HelperService,
    private router: Router,

   
    private http:  AuthorService) { 
      this.createForm();
      
    }

    public enableForm(value){
      this.enabled = value;
      if(!this.enabled){
        this.form.patchValue(this.author);
      }
    }
  ngOnInit(): void {
  }
  public closeModal(): void
  {
   // this.activeModal.close();
  }
  private createForm() {
    this.form = this.fb.group({
      id: [""],
      Dob: ["", [Validators.compose([Validators.required, Validators.minLength(3)] )]],
      Email: ["", [Validators.compose([Validators.required, Validators.email] )]],
      LastName: ["", Validators.required],
      FirstName: ["", Validators.required],
      City: ["", Validators.required],
      
     
    });
  }
  get f() {
    return this.form.controls;
  }
  public getControlErrors(controlName, form = this.form) {
    const control = form.controls[controlName];
    control.setErrors({errordb: null});
    control.updateValueAndValidity();
  
    let errors = [];
    if (control.errors) {
      errors = this.helper.getControlErrors(control);
    }
    const dbErrors = this.errorsDb.find( f => f.name == controlName);
   
    if (dbErrors){
      dbErrors.value.forEach(k => {
          errors.push(k);
        });
      this.form.controls[controlName].setErrors({errordb: true});
      this.form.controls[controlName].updateValueAndValidity();
     }
  
  
    return errors;
  }
  onSave(){
    this.submitted = true;
    console.log(this.form);
    
    if(!this.form.valid){
      return;
    }
    
      this.createBook(this.form.value)
    
    
  }
  createBook(data){
    this.http.post(data).subscribe(
      (res : any) => {
        Swal.fire({
          type: "success",
          title: 'Operacion Exitosa',
          text: 'Autor registrado exitosamente',
        });

        this.router.navigate(['/authors']);
      },
      (err : any) => {
               
        let errors = this.helper.getDbErrorsMessage( err.error);
        Swal.fire({
          type: "error",
          title: 'Error Al Registrar',
          text: errors,
        });
      }
    );
}


}
