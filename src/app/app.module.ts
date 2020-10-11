import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import {ProductPageComponent} from './product-page/product-page.component'
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    ProductPageComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
