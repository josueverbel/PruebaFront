
export interface IServiceInterface {
    UrlBase: string;

    get(): any;
    post(data : any): any;
    put(data : any): any;
    delete(data : any): any;
    getById(id : number): any;
}

