import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() text: string | undefined;

  constructor() {
  }

  ngOnInit(): void {}

}
