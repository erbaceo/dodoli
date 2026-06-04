import { Routes } from '@angular/router';
import { HomeComponent }     from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { AboutComponent }    from './pages/about/about';
import { LiveComponent }     from './pages/live/live';
import { ScatolaComponent }  from './pages/scatola/scatola';
import { AffidaComponent }   from './pages/affida/affida';

export const routes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'nuovi-arrivi',   component: ProductsComponent, data: { mode: 'new' } },
  { path: 'seconda-storia', component: ProductsComponent, data: { mode: 'second' } },
  { path: 'live',           component: LiveComponent },
  { path: 'scatola',        component: ScatolaComponent },
  { path: 'affida',         component: AffidaComponent },
  { path: 'chi-siamo',      component: AboutComponent },
  { path: 'about',          redirectTo: 'chi-siamo' },
  { path: 'products',       redirectTo: 'nuovi-arrivi' },
  { path: '**',             redirectTo: '' },
];
