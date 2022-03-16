import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../my.validators';

interface countryKeysType {
  [key: string]: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [ //null начальное состояние формы
      Validators.email,
      Validators.required,// можно указывать массив валидаторов, либо просто один валидатор, либо вооще ничего
      MyValidators.restrictedEmails,
    ], [MyValidators.uniqEmails]), //асинхронный валидатор, также может быть массих или одиночный
    yourName: new FormControl(null, [
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.required,
    ]),
    address: new FormGroup({
      country: new FormControl('ru', []), // устанавливаем дефолтное значение
      city: new FormControl('', [Validators.required]),
    }),
    skills: new FormArray([]),
  });

  constructor() {}

  ngOnInit(): void {}

  setCapital() {
    const cities: countryKeysType = {
      ru: 'Moscow',
      ua: 'Kiev',
      by: 'Minsk',
    };

    const countryKey: string = this.form.get('address')?.get('country')?.value; // у нас элемент select, a y select значение value указано изначально
    const city: string = cities[countryKey];
    this.form.patchValue({
      // для установки нового значения используется метод patchValue !!!!
      address: { city },
    });
  }

  addSkill() {
    const control = new FormControl('', Validators.required); // валидация для новых контролов в массиве, здесь пример без массива
    (this.form.get('skills') as FormArray).push(control);
  }

  getFormControls(): FormArray {
    // данный метод нужен для TS, в temlate без него ошибка
    return this.form.get('skills') as FormArray;
  }

  submit() {
    console.log('submit', this.form.value);
    this.form.reset();
  }
}
