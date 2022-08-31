import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerandaComponent } from './beranda/beranda.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArtikelComponent } from './artikel/artikel.component';



@NgModule({
  declarations: [
    BerandaComponent,
    AboutUsComponent,
    ArtikelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BerandaComponent,
    AboutUsComponent,
    ArtikelComponent
  ],
})
export class PagesModule { }
