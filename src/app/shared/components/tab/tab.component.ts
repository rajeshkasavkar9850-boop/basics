import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

 selectedSkill : string = 'css'

onTabChange(skill :string){
  this.selectedSkill = skill
}



  constructor() { }

  ngOnInit(): void {
  }

}
