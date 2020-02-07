import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  //CTOR only for DI
  constructor(private http: HttpClient) {}

  public get(){

  }
  
  public post(){

  }
  public put(){

  }
  public delete(){

  }
}
