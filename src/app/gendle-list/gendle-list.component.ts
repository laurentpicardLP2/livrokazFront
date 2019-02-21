import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GendleService } from '../services/gendle.service';
import { Gendle } from '../models/gendle.model';
import { Role } from '../models/role.model';

@Component({
  selector: 'app-gendle-list',
  templateUrl: './gendle-list.component.html',
  styleUrls: ['./gendle-list.component.css']
})

export class GendleListComponent implements OnInit {

  gendleList: BehaviorSubject<Gendle[]>;
  public role: BehaviorSubject<Role>
  public availableRole: Role;
  public typeRole: string;

  constructor(private gendleService: GendleService,
              private loginService: LoginService) { }

  ngOnInit() {
    console.log("ngOnInit Gendle");
    this.gendleList = this.gendleService.availableGendle$

    this.loginService.getRole().subscribe(
      role => {
        this.availableRole = role;
        console.log(this.availableRole.role);
        this.typeRole = this.availableRole.role;
      });

    this.role = this.loginService.availableRole$;
  }

}
