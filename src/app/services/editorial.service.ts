import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from '.';
import { Constant } from '../shared/constants';
import { IServiceInterface} from '../Iservices/IServiceInterface';
@Injectable({
  providedIn: 'root'
})
export class EditorialService implements IServiceInterface {
  UrlBase: string;
  constructor(private globalService: GlobalService) {
    this.UrlBase = Constant.Endpoints.EDITORIAL.BASE;
  }
  get() : Observable<any>  {
    return this.globalService.get(this.UrlBase).pipe(
      map(res => {
        return res;
      })
    );
  }
  post(data:any)  : Observable<any> {
    return this.globalService
    .post(this.UrlBase, data)
    .pipe(
      map(res => {
        return res;
      })
    );
}
  
  put(data:any) : Observable<any>  {
    return this.globalService
    .put(this.UrlBase + "/" + data.id, data)
    .pipe(
      map(res => {
        return res;
      })
    );
  }
  delete(data) : Observable<any>  {
    return this.globalService
    .delete(this.UrlBase +  "/" + data.id)
    .pipe(
      map(res => {
        return res;
      })
    );
  }
  getById(id:number) : Observable<any>  {
    return this.globalService
    .get(this.UrlBase + "/" + id)
    .pipe(
      map(res => {
        return res;
      })
    );
  }
 
 
}

