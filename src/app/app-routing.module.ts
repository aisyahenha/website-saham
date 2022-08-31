import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
// import { ChildAComponent } from './sample-route/comp-a/child-a/child-a.component';
// import { ChildBComponent } from './sample-route/comp-a/child-b/child-b.component';
// import { CompAComponent } from './sample-route/comp-a/comp-a.component';
// import { CompBComponent } from './sample-route/comp-b/comp-b.component';
// import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  /*{
    path: 'home',
    component: HomePageComponent
},
  {
    path: 'cv',
    component: PortofolioComponent,
   
  },
  {
    path: 'todo',
    component: FooterComponent,
   
  },
  /*{ path: 'component-a', component: CompAComponent,children: [
    {
      path: 'child-a',  // child route path
      title: 'child-a',
      component: ChildAComponent,  // child route component that the router renders
    },
    {
      path: 'child-b/:id',
      title: 'child b',
      component: ChildBComponent,  // another child route component that the router renders
    },
  ], },
  { path: 'component-b', component: CompBComponent },
  { path: '', redirectTo: '/component-a', pathMatch :'full'},
  {
    path:'**', component: NotFoundComponent
  }
  */
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
