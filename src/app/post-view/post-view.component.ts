import {
  Component,
  Input,
  OnInit,
  ContentChild,
  ElementRef,
} from '@angular/core';
import { posts } from '../app.component';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
})
export class PostViewComponent implements OnInit {
  @Input() posts: posts | undefined;

  constructor() {}

  ngOnInit(): void {}
}
