import { Injectable } from '@angular/core';
import { InnerTestServiceService } from './inner-test-service.service';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  conunter = 0;

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
