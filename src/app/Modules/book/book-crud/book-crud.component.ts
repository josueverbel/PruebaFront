import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthorService, BookService, EditorialService, HelperService } from 'src/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-crud',
  templateUrl: './book-crud.component.html',
  styleUrls: ['./book-crud.component.scss']
})
export class BookCrudComponent implements OnInit {
  book : any;
  enabled = false;
  loading = false;
  public form: FormGroup;
  public dropdownSettings;
  public dropdownAuthorSettings;
  public errorsDb = [];

  public submitted = false;
  public message;
  public authors = [];
  public editorials = [];
  constructor( public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private helper: HelperService,

    private editorialService: EditorialService,
    private authorService: AuthorService,
    private http:  BookService) { 
      this.createForm();
      this.getAuthors();
      this.getEditorials();
    }

  ngOnInit(): void {
    if (this.book){
      this.myPacthValue();
    }
    this.dropdownSettings = this.helper.GetDropDownSettings(
      true,
      "id",
      "name",
      false
    );
    this.dropdownAuthorSettings = this.helper.GetDropDownSettings(
      true,
      "id",
      "fullName",
      false
    );
  }
  public closeModal(): void
  {
    this.activeModal.close();
  }

  public enableForm(value){
    this.enabled = value;
    if(!this.enabled){
      this.form.patchValue(this.book);
    }
  }
  private createForm() {
    this.form = this.fb.group({
      id: [""],
      Title: ["", [Validators.compose([Validators.required, Validators.minLength(3)] )]],
      Year: ["", [Validators.compose([Validators.required, Validators.min(1900), Validators.max(2022)] )]],
      PageCount: ["", Validators.required],
      EditorialId: ["", Validators.required],
      Editorial: ["", Validators.required],
      AuthorId: ["", Validators.required],
      Author: ["", Validators.required]
     
    });
  }
  
  get f() {
    return this.form.controls;
  }
  public myPacthValue() {
    this.form.patchValue(this.book);
    this.loading = false;

  }

  getAuthors(){
    this.authorService.get().subscribe(
      (res) => {
        this.authors = res;
      }
    )
  }
  getEditorials(){
    this.editorialService.get().subscribe(
      (res) => {
        this.editorials = res;
      }
    )
  }

  onItemEditorialSelect(event){
    this.form.controls.EditorialId.setValue(event.id);
  }
  onItemAuthorSelect(event){
    this.form.controls.AuthorId.setValue(event.id);
  }
  onSave(){
    this.submitted = true;
    
    if(!this.form.valid){
      return;
    }
    if(this.form.value.id){
      this.updateBook(this.form.value);
    }else{
      this.createBook(this.form.value)
    }
    
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
 

  createBook(data){
      this.http.post(data).subscribe(
        (res : any) => {
          this.activeModal.close({status:true, action:"create"});
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
  updateBook(data){
    this.http.put(data).subscribe(
      (res : any) => {
        this.activeModal.close({status:true, action:"update"});
      },
      (err : any) => {
        Swal.fire({
          type: "error",
          title: 'Error Al Acturalizar',
          text: 'Un error ocurrio al intentar guardar tus datos',
        });
      }
    );
  }
}
