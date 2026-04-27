import { Component } from "@angular/core";



@Component({
    selector : 'test',
    template : `<p>This is test component</p>`,
    styles : [`
      p{
        padding: 10px;
        margin: 10px;
        background-color: skyblue;
        border: 1px solid red;
      }
    `]
})

export class TestComponent{
    
}