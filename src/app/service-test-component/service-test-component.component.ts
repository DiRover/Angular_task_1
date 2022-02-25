import { Component, OnInit } from '@angular/core';
import { TestServiceLocalService } from '../services/test-service-local.service';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-service-test-component',
  templateUrl: './service-test-component.component.html',
  styleUrls: ['./service-test-component.component.scss'],
  providers: [TestServiceLocalService],
})
export class ServiceTestComponentComponent implements OnInit {
  constructor(
    public testServiceService: TestServiceService,
    public testServiceLocalService: TestServiceLocalService
  ) {}

  ngOnInit(): void {}
}
