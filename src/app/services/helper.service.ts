import { Injectable } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";
@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor() {}
   public getDateFormatted(date : Date) {
    let month = date.getMonth() + 1;
    const months = month < 10 ? "0" + month : month;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    
    return `${date.getFullYear()}-${months}-${day}`; 
  }
  public getControlErrors(control : AbstractControl) {
    let minValue = control.errors?.min?.min?  control.errors?.min?.min : 0;
    let maxValue = control.errors?.max?.max?  control.errors?.max?.max : 0;
    let min = control.errors.minlength
      ? control.errors.minlength.requiredLength
      : 0;
    let max = control.errors.maxlength
      ? control.errors.maxlength.requiredLength
      : 0;
    let errMsgs = {
      email: "El texto deber ser un email valido",
      required: "Este campo es obligatorio",
      minlength: "Este campo debe contener al menos " + min + " Caracteres",
      maxlength: "Este campo debe contener maximo " + max + " Caracteres",
      min: "El valor minimo de este campo debe ser " + minValue ,
      max: "El valor maximo de este campo debe ser " + maxValue ,
    };

    let msg = [];
    for (let key in control.errors) {
      msg.push(errMsgs[key]);
    }
    return msg;
  }
  public getDbErrorsMessage(error) : string{
    
    let errorsDb = this.getDbError(error);
    let errors = "";
   
    errorsDb.forEach((k) => {
    
     errors += k.value.toString();
     
    });
   return errors;
  }
  public getDbError(originalerrors) {
    const errors = [];
    const keys = Object.keys(originalerrors);
    const values = Object.values(originalerrors);
    keys.forEach((k) => {
      errors.push({ name: k, value: originalerrors[k] });
    });
    return errors;
  }
  public GetDropDownSettings(single: boolean, id: any, name: any, filter) {
    return {
      singleSelection: single,
      idField: id,
      textField: name,
      selectAllText: "Seleccionar todos",
      unSelectAllText: "Deseleccionar todos",
      itemsShowLimit: 1,
      allowSearchFilter: filter,
      enableCheckAll: !single,
      closeDropDownOnSelection: true,
      searchPlaceholderText: "Buscar elemento"
    };
  }
  public GetMyDrpOptions(currentYear, currentMonth, currentDate) {
    const imdr = {
      dateFormat: "dd/mm/yyyy",
      markCurrentDay: true,
      firstDayOfWeek: "su",
      monthLabels: {
        1: "Ene",
        2: "Feb",
        3: "Mar",
        4: "Abr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Ago",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dic"
      },
      dayLabels: {
        su: "Dom",
        mo: "Lun",
        tu: "Mar",
        we: "Mié",
        th: "Jue",
        fr: "Vie",
        sa: "Sáb"
      },
      disableUntil: {
        year: currentYear,
        month: currentMonth,
        day: currentDate - 1
      }
    };
    return imdr;
  }
}
