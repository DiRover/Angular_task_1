import { Injectable } from '@angular/core';


//внутренний сервис для дргуих сервисов
//используется глобально
@Injectable(
  {
    providedIn: 'root'
  }
)
export class InnerTestServiceService {

  constructor() { }

  log(text: string) {
    console.log(`test ${text}`)
  }
}
