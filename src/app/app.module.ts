import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsComponent} from './components/news/news.component';
import {FormsModule} from "@angular/forms";
import {FormComponent} from './components/form/form.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {StorageService} from "./services/storage.service";

@NgModule({
  declarations: [  //配置当前项目运作的组件
    AppComponent, NewsComponent, FormComponent, TodoListComponent
  ],
  imports: [  //当前项目所需的其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StorageService
  ],  //配置项目需要的服务
  bootstrap: [AppComponent]
})
export class AppModule {
}
