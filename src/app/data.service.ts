import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
  addData(item) {
    this.items.push(item);
  }
}
