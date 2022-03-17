import { Component, Injectable, OnInit } from '@angular/core';
import { TestServiceLocalService } from '../services/test-service-local.service';
import { TestServiceService } from '../services/test-service.service';

//способо генерации сервиса ng g s folder/name
//сервиси это как кастомные хуки или функции из контекста в React
// после регистрации доступны во всем компоненте, также можно сделать только локальные сервиы
//в данном компонененте например зарегистрирован локальный сервис
// @Injectable({providedIn: 'root'}) еще один способ зарегистрировать сервис
//автоматически сервис регистрируется в массие providers ы app.module

@Component({
  selector: 'app-service-test-component',
  templateUrl: './service-test-component.component.html',
  styleUrls: ['./service-test-component.component.scss'],
  providers: [TestServiceLocalService],  //регистрации локального сервиса, виден только в одном компоненте
})
export class ServiceTestComponentComponent implements OnInit {
  constructor(
    public testServiceService: TestServiceService, //в примере говориться что можно указывать типо поля private
    public testServiceLocalService: TestServiceLocalService// но это ошибка, так не работает
  ) {}

  ngOnInit(): void {}
}
