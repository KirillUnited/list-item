import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  items = [];
  itemRow;
  constructor(private dataService: DataService) { }
  addItem(name, price) {
    this.dataService.addData(name, price);
    this.closeBtn.nativeElement.click();
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  ngOnInit() {
    this.items = this.dataService.items;
  }
}
