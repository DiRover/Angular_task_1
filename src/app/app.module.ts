import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    IfNotDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
