import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductService } from './product.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { CreateComponentComponent } from './create-component/create-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ListComponentComponent,
    EditComponentComponent,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
