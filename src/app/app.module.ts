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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabForComponent } from './shared/components/tab-for/tab-for.component';
import { TabSwitchComponent } from './shared/components/tab-switch/tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TestComponent,
    TodosComponent,
    TodosSComponent,
    StudentOneComponent,
    TabComponent,
    TabForComponent,
    TabSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
