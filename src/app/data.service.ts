import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  items = [
    { name: "Apple iPhone 7", price: 56000 },
    { name: "HP Elite x3", price: 56000 },
    { name: "Alcatel Idol S4", price: 25000 }
  ];
  addData(name, price) {
    this.items.push({
      name: name,
      price: price
    });
  }
}
