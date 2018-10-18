import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  items = [
    { name: "Apple iPhone 7", desc: "iPhone 7 стал новым флагманом компании Apple" },
    { name: "HP Elite x3", desc: "Мобильный флагман компании HP, работающий на Windows 10 Mobile." },
    { name: "Alcatel Idol S4", desc: "Alcatel создал экстремальный флагман из стекла и металла. " }
  ];
  count = this.items.length;
  addData(name, desc) {
    console.log(name, desc);
    
    this.items.push({
      name: name,
      desc: desc
    });
  }
  removeData(i) {
    delete this.items[i];
  }
}
