import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { TestComponent } from './shared/components/test/test.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './shared/components/todos/todos.component';
import { TodosSComponent } from './shared/components/todos-s/todos-s.component';
import { StudentOneComponent } from './shared/components/student-one/student-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TestComponent,
    TodosComponent,
    TodosSComponent,
    StudentOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
