import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  items = [];
  itemRow;
  constructor(private dataService: DataService) { }
  addItem(name, price) {
    this.dataService.addData(name, price);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  ngOnInit() {
    this.items = this.dataService.items;
  }
}
