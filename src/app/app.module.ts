import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostViewComponent } from './post-view/post-view.component';
import { TestDirectivDirective } from './directives/test-directiv.directive';
import { IfNotDirective } from './directives/if-not.directive';
import { PipeExamplePipe } from './pipes/pipe-example.pipe';
import { ServiceTestComponentComponent } from './service-test-component/service-test-component.component';
import { TestServiceService } from './services/test-service.service';
import { InnerTestServiceService } from './services/inner-test-service.service';
import { FormComponent } from './form/form.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavComponent,
    HeaderComponent,
    TextComponent,
    ButtonComponent,
    CreatePostComponent,
    PostViewComponent,
    TestDirectivDirective,
    IfNotDirective,
    PipeExamplePipe,
    ServiceTestComponentComponent,
    FormComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TestServiceService, InnerTestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
