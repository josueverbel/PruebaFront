import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { Constant } from "../shared/constants";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  private headers;
  private options;
  private httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "",
        responseType: ""
      }),
      responseType: ""
    };
  }

  /**
   * @description Manejo de errores en las peticiones.
   */
  private handleError(error: HttpErrorResponse) {
    const stylesLogErrors = `
      background: linear-gradient(#a30b34, #571402);
      border: 1px solid #3E0E02;
      color: white;
      display: block;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
      box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.4) inset,
        0 5px 3px -5px rgba(0, 0, 0, 0.5),
        0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset;
      text-align: center;
      font-weight: bold;
    `;

    if (!Constant.PRODUCTION) {
      // console.log(`%c handleError %c ${window['emoticons'].bomb}`, stylesLogErrors, 'padding-left: 10px; font-size: 20px;');
      /* console.log(error); */
      // console.log('%c End HandleError', stylesLogErrors);
    }
    const errors = [];
    if (error.error?.errors) {
      // tslint:disable-next-line: forin
      for (const key in error.error?.errors) {
        errors.push(error.error?.errors[key]);
      }
    }
    return throwError({
      codetext: error.statusText,
      code: error.status,
      message: error.message
        ? error.message
        : error.error.message
        ? error.error.message
        : error.error.message,
      handleError: true,
      error: error.error,
      errors: errors
    });
  }

  /**
   * @description Optener token de autententication
   * @returns String
   */
  getToken(): string {
    return Constant.AUTH.getToken();
  }

  /**
   * @description Optener cabecera por defecto
   * @return HttpHeaders {any}
   */
  getHeader() {
    const token = "Bearer " + this.getToken();
    this.httpOptions.headers.Authorization = token;
    return this.httpOptions;
  }

  getFileHeaders() {
    const token = "Bearer " + this.getToken();
    this.httpOptions.headers.Authorization = token;
    this.httpOptions.headers.responseType = "Blob";
    this.httpOptions.responseType = "blob";

    return this.httpOptions;
  }

  /**
   * @description Peticiones por el metodo post
   * @param url string
   * @param data Object
   * @param header? HttpHeaders
   * @return Observable
   */
  post(url: string, data: any, headerOptions?: any): Observable<any> {
    return this.http
      .post(url, data, headerOptions ? headerOptions : this.getHeader())
      .pipe(catchError(this.handleError));
  }
  postFile(url: string, data: any, headerOptions?: any): Observable<any> {
    return this.http.post(
      url,
      data,
      headerOptions ? headerOptions : this.getHeader()
    );
  }

  /**
   * @description Peticiones por el metodo GET
   * @param url string
   * @param header? HttpHeaders
   * @return Observable
   */
  get(url: string, headerOptions?: any): Observable<any> {
    return this.http
      .get(url, headerOptions ? headerOptions : this.getHeader())
      .pipe(catchError(this.handleError));
  }

  
  /**
   * @description Peticiones por el metodo PUT
   * @param url string
   * @param header? HttpHeaders
   * @return Observable
   */
  put(url: string, data?: any, headerOptions?: any): Observable<any> {
    return this.http
      .put(url, data, headerOptions ? headerOptions : this.getHeader())
      .pipe(catchError(this.handleError));
  }

  
  /**
   * @description Peticiones por el metodo PUT
   * @param url string
   * @param header? HttpHeaders
   * @return Observable
   */
   patch(url: string, data?: any, headerOptions?: any): Observable<any> {
    return this.http
      .patch(url, data, headerOptions ? headerOptions : this.getHeader())
      .pipe(catchError(this.handleError));
  }
  /**
   * @description Peticiones por el metodo DEL
   * @param url string
   * @param header? HttpHeaders
   * @return Observable
   */
  delete(url: string, headerOptions?: any): Observable<any> {
    return this.http
      .delete(url, headerOptions ? headerOptions : this.getHeader())
      .pipe(catchError(this.handleError));
  }
}
