import { Routes } from '@angular/router';
import { HomeComponent }     from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { AboutComponent }    from './pages/about/about';

export const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about',    component: AboutComponent },
  { path: '**',       redirectTo: '' },
];
