import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('inputTitlePost') inputTitleRef: ElementRef | undefined; // показываю как можно обратиться к эл-ту при помощи средств angular
  @ViewChild('inputTextPost') inputTextPost: ElementRef | undefined; // показываю как можно обратиться к эл-ту при помощи средств angular, ниже прописано использование ссылки
  @ContentChild('testPost') myForm: ElementRef | undefined; // это еще один способ получить элемент, но тут надо быть внимательным, получаемый элемент доджен быть дочерним
  // и находится в <ng-content></ng-content> это элемента ("этого" - это имеется ввиду CreatePostComponent)

  title: string = 'title';

  text: string = 'text';

  tittleNgModel: string = 'title ngModel';

  textNgModel: string = 'text ngModel';

  constructor() {
    
  }

  ngOnInit(): void {}

  test($event: any) {
    console.log($event);
  }

  // получение поста обычным способом

  submitForm(form: HTMLFormElement) {
    this.inputTitleRef?.nativeElement.value; // работа с полученными при помощи angular 
    this.inputTextPost?.nativeElement.focus(); // ссылками на элементы

    const post: Post = {
      title: form['post-title'].value,
      text: form['text'].value,
    };

    this.title = this.text = '';

    this.onAddPost.emit(post);
  }

  // получение поста при помои технологий angular ngModel

  submitFormNgModel(form: HTMLFormElement) {
    const post: Post = {
      title: form['post-title-ngModel'].value,
      text: form['text-ngModel'].value,
    };

    this.tittleNgModel = this.textNgModel = '';

    this.onAddPost.emit(post);
  }
}
