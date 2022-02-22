import { environment } from "../../environments/environment";

export const Endpoint = {
  AUTHOR: {
    BASE: environment.api.base + "authors",
  },
  BOOK: {
    BASE :environment.api.base + "books",
  },
  EDITORIAL: {
    BASE :environment.api.base + "editorials",
  },
 
};
