import { Component, OnInit, NgModule } from '@angular/core';
import { DatamockService } from './datamock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'livrokaz';

  constructor(private dataService: DatamockService) {}

  ngOnInit() {
    this.dataService.publishAuthors();
    this.dataService.publishGendles();
    this.dataService.publishGoogleBooks();
  }
}
