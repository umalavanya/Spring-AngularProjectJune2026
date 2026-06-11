import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  imports: [],
  templateUrl: './sales-person-list.html',
  styleUrl: './sales-person-list.css',
})
export class SalesPersonList {

  // create an array of objects
  salesPersonList: SalesPerson[] = [

    new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 50000) ;

  ]

  constructor(){}
}


