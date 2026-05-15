import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';

export const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about',    component: AboutComponent },
  { path: '**',       redirectTo: '' },
];
