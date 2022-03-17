import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// кастомный ngModel

//этот объект является магией в уроке точного определения этому нет
//данный объект делает данный компонент ngModel

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
}

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {

  state = 'off';

  //private можно не указывать
  //короче это просто так описывается тип переменной onChange
  //по другому хз как объяснить зачем тут присваивается функция
  //в видео объяснения нет

  private onChange = (value: any) => {};

  setState(state: string): void {
    this.state = state;
    this.onChange(this.state); //вот тут наверно отпутит наверх
  }

  registerOnChange(fn: any): void {
    //вот тут опять функция присваивается 
    this.onChange = fn; //типо так ангуляр оутпутит состояние наверх, хз
    // throw new Error('Method change not implemented.'); - вот эти оштбки надо сразу удалять
    //ставятся поумолчанию, код потом не выполняется!!!! 40 минут потратил чтобы это понять!!!
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method touched not implemented.');
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(state: string): void {
    this.state = state
    // throw new Error('Method whrite not implemented.');
  }
  
  
}
