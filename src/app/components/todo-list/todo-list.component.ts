import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  //这里在storage前加入public可以
  constructor(public storage: StorageService) {

  }
  historyListName:string = 'historyList';

  keyWord: string = '';

  historyList: string[] = [];

  //刷新页面会触发这个生命周期函数
  ngOnInit(): void {
    if(this.storage.getData(this.historyListName)!==null){
      this.historyList = this.storage.getData(this.historyListName);
    }
  }

  recordWord() {
    if(this.keyWord.trim()!==''&&this.historyList.indexOf(this.keyWord)==-1){
      this.historyList.push(this.keyWord);
      this.storage.setData(this.historyListName,this.historyList);
    }
  }

  deleteHistory(key:number) {
    this.historyList.splice(key,1);
    this.storage.setData(this.historyListName,this.historyList);
  }

  description:string = '';

  todoList: todoItem[] = [];

  getInProgressTodoList() {
    return this.todoList.filter(todoItem=>!todoItem.done);
  }

  addTodoItem() {
    if(this.description.trim()!==''){
      this.todoList.push({
        desc:this.description,
        done:false
      });
    }
  }
}
interface todoItem{
  desc:string,
  done:boolean
}
