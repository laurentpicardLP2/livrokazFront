import { Gendle } from './../models/gendle.model';
import { Component, OnInit } from '@angular/core';
import { GendleService } from '../services/gendle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gendle-new',
  templateUrl: './gendle-new.component.html',
  styleUrls: ['./gendle-new.component.css']
})
export class GendleNewComponent implements OnInit {

  newGendle: Gendle;

  constructor(private gendleService: GendleService,
    private router: Router) { }

  ngOnInit() {
    this.newGendle = new Gendle('', 0);
  }

  onAddGendle(){
    this.gendleService.createGendle(this.newGendle);
    this.router.navigate(['/gendles/']);
  }

}





