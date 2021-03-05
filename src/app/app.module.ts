import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostagensComponent } from './component/postagens/postagens.component';
import { AlbunsComponent } from './component/albuns/albuns.component';
import { ToDoComponent } from './component/to-do/to-do.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostagensComponent,
    AlbunsComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,  
    FormsModule,  
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
