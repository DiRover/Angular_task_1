import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string
};

export type posts = Array<Post>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-app';

  showMsg = 'This test project. Click here to close this banner'

  show = false;

  isVisible = true;

  inputDefaultValue = 'test';

  posts: posts = [];

  ngOnInit() {
      setTimeout(() => {
        this.show = true;
      }, 3000)
  }

  newPost(post: Post) {
    this.posts.unshift(post);
    console.log(this.posts)
  }

  closeMsg() {
    this.show = false;
  }

  inputHandler(event: any) {
    const value = event.target.value;
    this.inputDefaultValue = value;
    
  }

  getInputValue(value: string) {
    this.showMsg = value;
    this.inputDefaultValue = '';
  }
}
