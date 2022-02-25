import { Injectable } from '@angular/core';
import { TestServiceService } from './test-service.service';

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
