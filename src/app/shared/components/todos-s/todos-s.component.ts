import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todos-s',
  templateUrl: './todos-s.component.html',
  styleUrls: ['./todos-s.component.scss']
})
export class TodosSComponent implements OnInit {
  isIneditMode : boolean = false
  editObj ! : Itodo;
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

  @ViewChild('todoControl')todoControl! : ElementRef
  
onTodoAdd(){
  let val = this.todoControl.nativeElement.value
  if(val.length > 0){
    let newTodo : Itodo ={
       todoItem : val,
       todoId : Date.now().toString()
    }
    this.todosArr.push(newTodo)
    this.todoControl.nativeElement.value = ''
  }
}

trackByFun(index : number, item :Itodo){
  return item.todoId
}

onRemove(id:string){
  console.log(id)
  let getIndex = this.todosArr.findIndex(t => t.todoId === id)
  this.todosArr.splice(getIndex,1)
}

onEdit(todo:Itodo){
 console.log(todo)
 this.isIneditMode = true
 this.editObj = todo;
 this.todoControl.nativeElement.value = this.editObj.todoItem;
}

onTodoUpdate(){
  let UPDATE_ID = this.editObj.todoId
  let UPDATED_OBJ : Itodo ={
    todoItem : this.todoControl.nativeElement.value,
    todoId : UPDATE_ID
  }
  console.log(UPDATED_OBJ);
  let getIndex = this.todosArr.findIndex(t => t.todoId === UPDATE_ID)
  this.todosArr[getIndex] = UPDATED_OBJ
  this.todoControl.nativeElement.value = ''
  this.isIneditMode = false
}
  constructor() { }

  ngOnInit(): void {
  }


  
}
