import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tabs';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
  tabsArr : Array<Itab> = [
   {
  tabTitle: 'React JS',
  frameWorkName: 'react',
  tabContent: `<strong>React</strong> React is a popular JavaScript library used for building user interfaces.
  It allows developers to create reusable components and manage state efficiently.
  Virtual DOM improves performance and provides fast rendering of UI updates.`
},
{
  tabTitle: 'Vue JS',
  frameWorkName: 'vue',
  tabContent: `<strong>Vue</strong> Vue is a progressive JavaScript framework used to build interactive web interfaces.
  It is easy to integrate and provides reactive data binding.
  Vue is lightweight and developer-friendly.`
},
{
  tabTitle: 'Node JS',
  frameWorkName: 'node',
  tabContent: `<strong>Node</strong> Node.js is a runtime environment that allows JavaScript to run on the server.
  It is built on Chrome's V8 engine and is known for its non-blocking, event-driven architecture.
  It is widely used for building scalable backend applications.`
},
{
  tabTitle: 'Bootstrap',
  frameWorkName: 'bootstrap',
  tabContent: `<strong>Bootstrap</strong> Bootstrap is a front-end CSS framework used to design responsive websites quickly.
  It provides pre-built components like buttons, modals, and navigation bars.
  It helps developers save time and maintain consistency in design.`
},
{
  tabTitle: 'Tailwind CSS',
  frameWorkName: 'tailwind',
  tabContent: `<strong>Tailwind</strong> Tailwind CSS is a utility-first CSS framework used for building custom designs.
  It provides low-level utility classes to style elements directly in HTML.
  It gives full control over design without writing custom CSS.`
}
  ]

  selectedSkill : string = 'tailwind'

 onTabChange(skill : string){
  this.selectedSkill = skill
 }

  constructor() { }

  ngOnInit(): void {
  }

}
