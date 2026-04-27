import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
   

todosArr: Array<Itodo> = [
  {
    todoItem : 'Angular',
    todoId : '123'
  },
   {
    todoItem : 'TypeScript',
    todoId : '124'
  },
   {
    todoItem : 'JavaScript',
    todoId : '125'
  },
   {
    todoItem : 'HTML5',
    todoId : '126'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

   onTodoAdd(ele:HTMLInputElement){
    let val = ele.value
    console.log(val);
  if(val.length > 0){
      let newTodo : Itodo= {
      todoItem: val,
      todoId : Date.now().toString()
    }
    this.todosArr.push(newTodo)
    ele.value = '';
  }
  }
  trackByFun(index : number,item:Itodo){
    return item.todoId
  }



}
