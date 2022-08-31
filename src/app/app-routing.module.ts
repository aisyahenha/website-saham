import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ArtikelComponent } from './pages/artikel/artikel.component';
import { BerandaComponent } from './pages/beranda/beranda.component';

const routes: Routes = [
  {
    path: '',
    component: BerandaComponent,
  },
  {
    path: 'home',
    component: BerandaComponent,
  },
  {
    path: 'article',
    component: ArtikelComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
