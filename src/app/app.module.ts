import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [  //配置当前项目运作的组件
    AppComponent, NewsComponent
  ],
  imports: [  //当前项目所需的其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],  //配置项目需要的服务
  bootstrap: [AppComponent]
})
export class AppModule { }
