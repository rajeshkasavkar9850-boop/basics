import { ChangeDetectionStrategy,Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../models/student';
import { SnackBarService } from '../../services/snackbar.service';


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
    stdId : '111',
    isActive : true
  },
  {
    fname: 'Amit',
    lname: 'Sharma',
    email: 'amit.sharma@gmail.com',
    contact: '9123456780',
    stdId : '112',
    isActive : false
  },
  {
    fname: 'Priya',
    lname: 'Verma',
    email: 'priya.verma@gmail.com',
    contact: '9988776655',
    stdId : '113',
    isActive : true
  },
  {
    fname: 'Sneha',
    lname: 'Patil',
    email: 'sneha.patil@gmail.com',
    contact: '9090909090',
    stdId : '114',
    isActive : false
  }
];

isInEditMode : boolean = false
editId ! : string

@ViewChild('fname') fname ! :ElementRef
@ViewChild('lname') lname ! :ElementRef
@ViewChild('email') email ! :ElementRef
@ViewChild('contact') contact ! :ElementRef
@ViewChild('isActive') isActive ! :ElementRef

constructor (
 private _snackBar: SnackBarService
){}

onStdAdd(){
  
  
 let fname = this.fname.nativeElement.value.trim();
  let lname = this.lname.nativeElement.value.trim();
  let email = this.email.nativeElement.value.trim();
  let contact = this.contact.nativeElement.value.trim();
  let isActive = this.isActive.nativeElement.value.trim();

   if(!fname || !lname || !email || !contact){
    this._snackBar.openSnackbar('Please fill all fields before adding student!');
    return;
  }

   let stdObj :Istudent ={
    fname : this.fname.nativeElement.value,
    lname : this.lname.nativeElement.value,
    email : this.email.nativeElement.value,
    contact : this.contact.nativeElement.value,
    isActive :this.isActive.nativeElement.value,
    stdId : Date.now().toString()
  }
   
  this.stdsArr.unshift(stdObj)
    this.fname.nativeElement.value = ''
     this.lname.nativeElement.value = ''
     this.email.nativeElement.value = ''
     this.contact.nativeElement.value = ''

     this._snackBar.openSnackbar(`the Student ${stdObj.fname} ${stdObj.lname} is added successfully!!`)
}

trackByStdId(index :number, std : Istudent){
 return std.stdId
}

onRemove(stdId :string){
  let getIndex = this.stdsArr.findIndex(s => s.stdId === stdId)
  let removedStd = this.stdsArr.splice(getIndex,1)
   this._snackBar.openSnackbar(`The Student ${removedStd[0].fname} ${removedStd[0].lname} is Removed successfully!!`)
}

onEdit(std :Istudent){
  console.log(std);
  this.editId = std.stdId;
  this.isInEditMode = true
  this.fname.nativeElement.value = std.fname;
  this.lname.nativeElement.value = std.lname;
  this.email.nativeElement.value = std.email;
  this.contact.nativeElement.value = std.contact;
  this.isActive.nativeElement.value = std.isActive;
}

onUpdate(){
  let UPDATE_ID = this.editId
  let UPDATED_OBJ : Istudent ={
    fname : this.fname.nativeElement.value,
    lname : this.lname.nativeElement.value,
    email : this.email.nativeElement.value,
    contact : this.contact.nativeElement.value,
    isActive : this.isActive.nativeElement.value,
   stdId : UPDATE_ID,
  }
  let getIndex = this.stdsArr.findIndex(s => s.stdId === UPDATE_ID)
  this.stdsArr[getIndex]= UPDATED_OBJ

     this._snackBar.openSnackbar(`The Student ${UPDATED_OBJ.fname} ${UPDATED_OBJ.lname} is Updated successfully!!`)

   this.fname.nativeElement.value = ''
     this.lname.nativeElement.value = ''
     this.email.nativeElement.value = ''
     this.contact.nativeElement.value = ''
     this.editId = ''
}


  ngOnInit(): void {
  }

}
