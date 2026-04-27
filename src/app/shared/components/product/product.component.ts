import { Component, ElementRef, ViewChild } from "@angular/core";


@Component({
    selector :'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})
export class ProductComponent{
 PRODUCT_NAME : string = 'Samsung M32';
 PRODUCT_ID : string = '1234';

 testHTML : string = `<p>This is test component!!!123</p>`;

 userName :string = 'I am Raj';

 imgSrc = `https://th.bing.com/th/id/OIP._j-SniZWm6lU6D6Qh2t6ZAHaE8?w=297&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7`;

// event Binding //

@ViewChild('productName')
 pn !: ElementRef

 searchProduct !: string ;
// onSearch(ele:HTMLInputElement){
//     let val = ele.value
//     console.log(`The Search product is ${val}`);
//     ele.value = ''
// }

// onSearch(){
//  console.log(this.pn.nativeElement.value);
//  this.pn.nativeElement.value = ''
// }


// onSearch(eve : Event){
//     let val = (eve.target as HTMLInputElement).value
//     console.log(val)
// }


// =============  Custome Create Two way data biding =====//


onSearch(eve:Event){
let val =( eve.target as HTMLInputElement).value;
this.searchProduct = val
}



}