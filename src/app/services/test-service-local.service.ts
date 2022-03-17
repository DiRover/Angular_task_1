import { Injectable } from '@angular/core';
import { InnerTestServiceService } from './inner-test-service.service';

@Injectable()
export class TestServiceLocalService {

  counter = 0;
//вставляем внутренний сервис
//тут можно указать тип поля private, т.к. не отправляем в шаблон
  constructor(private innerTestLocal: InnerTestServiceService) { }

  increase() {
    this.counter++
    this.innerTestLocal.log('increase local');
  };

  decrease() {
    this.counter--;
    this.innerTestLocal.log('decrease local');
  };

}
