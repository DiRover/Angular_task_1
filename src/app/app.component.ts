import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-app';

  showMsg = 'This test project. Click here to close this banner'

  show = false;

  inputDefaultValue = '';

  ngOnInit() {
      setTimeout(() => {
        this.show = true;
      }, 3000)
  }

  closeMsg() {
    this.show = false;
  }

  inputHandler(event: any) {
    const value = event.target.value;
    
  }

  getInputValue(value: string) {
    this.showMsg = value;
  }
}
