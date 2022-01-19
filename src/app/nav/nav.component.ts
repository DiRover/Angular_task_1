import { Component, OnInit } from '@angular/core';

import { links } from '../services/mainLinks'; // получаем список ссылок 



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links = links; //записываем ссылки
  
  constructor() { }

  ngOnInit(): void {
  }

}
