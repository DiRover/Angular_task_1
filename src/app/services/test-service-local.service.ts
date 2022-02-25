import { Injectable } from '@angular/core';
import { InnerTestServiceService } from './inner-test-service.service';

@Injectable()
export class TestServiceLocalService {

  counter = 0;

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
