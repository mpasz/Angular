import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService{
  getAuthors(){
    return ["Michał Pasz" , "Przemysław Bętkowski" , "Piotr Pawlus" ];
    
  }
}