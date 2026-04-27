import { ChangeDetectionStrategy,Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../models/student';


@Component({
  selector: 'app-student-one',
  templateUrl: './student-one.component.html',
  styleUrls: ['./student-one.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class StudentOneComponent implements OnInit {
[x: string]: any;
stdsArr : Array<Istudent> = [
  
  {
    fname: 'Rajesh',
    lname: 'Kumar',
    email: 'rajesh.kumar@gmail.com',
    contact: '9876543210',
    stdId : '111'
  },
  {
    fname: 'Amit',
    lname: 'Sharma',
    email: 'amit.sharma@gmail.com',
    contact: '9123456780',
    stdId : '112'
  },
  {
    fname: 'Priya',
    lname: 'Verma',
    email: 'priya.verma@gmail.com',
    contact: '9988776655',
    stdId : '113'
  },
  {
    fname: 'Sneha',
    lname: 'Patil',
    email: 'sneha.patil@gmail.com',
    contact: '9090909090',
    stdId : '114'
  }
];

isInEditMode : boolean = false
@ViewChild('fname') fname ! :ElementRef
@ViewChild('lname') lname ! :ElementRef
@ViewChild('email') email ! :ElementRef
@ViewChild('contact') contact ! :ElementRef

onStdAdd(){
  let stdObj :Istudent ={
    fname : this.fname.nativeElement.value,
    lname : this.lname.nativeElement.value,
    email : this.email.nativeElement.value,
    contact : this.contact.nativeElement.value,
    stdId : Date.now().toString()
  }
  this.stdsArr.unshift(stdObj)
    this.fname.nativeElement.value = ''
     this.lname.nativeElement.value = ''
     this.email.nativeElement.value = ''
     this.contact.nativeElement.value = ''
}

trackByStdId(index :number, std : Istudent){
 return std.stdId
}

onRemove(stdId :string){
  let getIndex = this.stdsArr.findIndex(s => s.stdId === stdId)
  this.stdsArr.splice(getIndex,1)
}




  constructor() { }

  ngOnInit(): void {
  }

}
