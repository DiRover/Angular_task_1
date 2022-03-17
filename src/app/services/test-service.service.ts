import { Injectable } from '@angular/core';
import { InnerTestServiceService } from './inner-test-service.service';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  conunter = 0;
//вставляем внутренний сервис
//тут можно указать тип поля private, т.к. не отправляем в шаблон
  constructor(private innerTestLocal: InnerTestServiceService) { }; // private innerTestLocal: InnerTestServiceService

  increase() {
    this.conunter++
    this.innerTestLocal.log('increase');
  };

  decrease() {
    this.conunter--;
    this.innerTestLocal.log('decrease');
  };
};
