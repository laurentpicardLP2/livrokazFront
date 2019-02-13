import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GendleService } from '../services/gendle.service';
import { Gendle } from '../models/gendle.model';


@Component({
  selector: 'app-gendle-list',
  templateUrl: './gendle-list.component.html',
  styleUrls: ['./gendle-list.component.css']
})
export class GendleListComponent implements OnInit {

  gendleList: BehaviorSubject<Gendle[]>;

  constructor( private gendleService: GendleService) { }

  ngOnInit() {
    this.gendleList = this.gendleService.availableGendle$
  }

}
