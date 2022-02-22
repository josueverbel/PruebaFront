import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditorialService, HelperService } from 'src/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editorial-crud',
  templateUrl: './editorial-crud.component.html',
  styleUrls: ['./editorial-crud.component.scss']
})
export class EditorialCrudComponent implements OnInit {
  editorial : any;
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

   
    private http:  EditorialService) { 
      this.createForm();
      
    }

    public enableForm(value){
      this.enabled = value;
      if(!this.enabled){
        this.form.patchValue(this.editorial);
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
      Name: ["", [Validators.compose([Validators.required, Validators.minLength(3)] )]],
      Email: ["", [Validators.compose([Validators.required, Validators.email] )]],
      Phone: ["", [Validators.compose([Validators.required, Validators.minLength(10)] )]],
      MaxCount: ["", Validators.required],
      Address: ["", Validators.required],
      
     
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
    data.Phone =  data.Phone.toString();
    this.http.post(data).subscribe(
      (res : any) => {
        Swal.fire({
          type: "success",
          title: 'Operacion Exitosa',
          text: 'Editorial registrado exitosamente',
        });

        this.router.navigate(['/editorial']);
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