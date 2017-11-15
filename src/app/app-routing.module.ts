import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponentComponent } from './list-component/list-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'products', pathMatch: 'full', component: ListComponentComponent },
  { path: 'products/new', component: CreateComponentComponent },
  { path: 'products/edit/:id', component: EditComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
