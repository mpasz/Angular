import { Injectable } from '@angular/core';

@Injectable({ //decorator function - potrzebujemy tylko kiedy jest powiązanie z konstruktorem
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
