import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopFormService {

  constructor() { }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    const data: number[] = [];
    for (let month = startMonth; month <= 12; month++) {
      data.push(month);
    }
    return of(data); // wrap data as observable because components will subscribe to this method to receive data
  }

  getCreditCardYears(): Observable<number[]> {
    const data: number[] = [];
    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;
    for (let year = startYear; year <= endYear; year++) {
      data.push(year);
    }
    return of(data); // wrap data as observable because components will subscribe to this method to receive data
  }

}
