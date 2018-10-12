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
  count;
  itemRow;
  constructor(private dataService: DataService) { }
  addItem(name, desc) {
    this.dataService.addData(name, desc);
    this.closeBtn.nativeElement.click();
    this.count++;
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.count--;
  }
  ngOnInit() {
    this.items = this.dataService.items;
    this.count = this.dataService.count;
  }
}
