import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DatamockService } from '../datamock.service';
import { Gendle } from '../models/gendle.model';


@Component({
  selector: 'app-gendle-list',
  templateUrl: './gendle-list.component.html',
  styleUrls: ['./gendle-list.component.css']
})
export class GendleListComponent implements OnInit {

  gendleList: BehaviorSubject<Gendle[]>;

  constructor( private route: ActivatedRoute,
               private datamockService: DatamockService, 
               private router: Router) { }

  ngOnInit() {
    this.gendleList = this.datamockService.availableGendle$
  }

}
