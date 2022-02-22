import { environment } from "../../environments/environment";
import { Endpoint } from "./endpoints";
export class Constant {
  public static PRODUCTION: boolean = environment.production;
  public static VERSION: string = environment.version;
  public static DEBUG = false;
  public static Endpoints = Endpoint;
  

  // Authentication
  public static AUTH = {
    getToken: () => {
      return localStorage.getItem("token");
    },
    getUser: () => {
      return JSON.parse(localStorage.getItem("user"));
    },
  
  };
 
}
