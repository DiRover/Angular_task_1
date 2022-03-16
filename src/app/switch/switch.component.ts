import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  state = 'off'

  constructor() { }

  ngOnInit(): void {
  }

  setState(value: string): void {
    this.state = value;
  }

}
