import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() control: FormControl;
  date: FormControl;
  @Input() minDate = '1920-01-02';
  @Input() initialValue = new Date();
  @Input()  maxDate = new Date();
  @Input()  label = 'Selecciona Fecha';
  @Input() showChange = false;
  @Input() isTo = false;
  @Output() onChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.control.setValue( this.dateToString(this.initialValue));
  }
  public ngOnChanges(changes: SimpleChanges): void {
    
    this.control.valueChanges.subscribe(val => {
      if (this.isTo) {
       
        let date =new Date (val);
        date.setDate(date.getDate() + 1);
        this.initialValue = date;
      }
     
      //console.log(this.label + ' ' + val);
      
      
    });
  }
  changeDate(value) {
    this.control.setValue(
      this.dateToString(value.value));
     this.onChange.emit({date:value, stringDate :this.dateToString(value.value)})
  }
  dateToString(date: Date) {
    const m = Number(date.getMonth())  + 1;
    const month = m < 10 ? '0' + m : m;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return `${date.getFullYear()}-${month}-${day}`;
  }
}
