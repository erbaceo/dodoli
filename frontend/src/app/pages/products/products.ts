import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService, Product } from '../../services/products';

type Mode = 'new' | 'second';

const AGE_GROUPS = ['0-12 mesi','1-2 anni','2-3 anni','3-4 anni','4-5 anni','5-6 anni','6-8 anni','8-10 anni','10-12 anni'];
const CATEGORIES = ['Abbigliamento','Cerimonia','Accessori'];
const SIZES = ['50','56','62','68','74','80','86','92','98','104','110','116','122','128','134','140'];

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl:    './products.scss',
})
export class ProductsComponent implements OnInit {
  private svc   = inject(ProductsService);
  private route = inject(ActivatedRoute);

  all         = signal<Product[]>([]);
  loading     = signal(true);
  error       = signal<string|null>(null);
  modal       = signal<Product|null>(null);
  mode        = signal<Mode>('new');
  sidebarOpen = signal(false);

  selectedAges       = signal<string[]>([]);
  selectedCategories = signal<string[]>([]);
  selectedSizes      = signal<string[]>([]);

  ageGroups  = AGE_GROUPS;
  categories = CATEGORIES;
  sizes      = SIZES;

  title    = computed(() => this.mode() === 'new' ? 'Nuovi Arrivi' : 'Seconda Storia');
  subtitle = computed(() => this.mode() === 'new'
    ? 'Le ultime novità selezionate per te'
    : 'Capi di seconda mano selezionati con cura');

  baseProducts = computed(() => {
    const p = this.all();
    return this.mode() === 'new'
      ? p.filter((_, i) => i % 4 !== 0).slice(0, 40)
      : p.filter((_, i) => i % 3 === 0).slice(0, 40);
  });

  products = computed(() => {
    let p = this.baseProducts();
    const cats = this.selectedCategories();
    if (cats.length) {
      p = p.filter(x => {
        if (cats.includes('Cerimonia') && ['womens-dresses','mens-suits','tops-womens'].includes(x.category)) return true;
        if (cats.includes('Accessori') && ['sunglasses','womens-watches','mens-watches','womens-bags','womens-jewellery'].includes(x.category)) return true;
        if (cats.includes('Abbigliamento') && !['sunglasses','womens-watches','mens-watches','womens-bags','womens-jewellery','womens-dresses','mens-suits','tops-womens'].includes(x.category)) return true;
        return false;
      });
    }
    return p;
  });

  activeFiltersCount = computed(() =>
    this.selectedAges().length + this.selectedCategories().length + this.selectedSizes().length
  );

  ngOnInit() {
    const m = this.route.snapshot.data['mode'] as Mode;
    if (m) this.mode.set(m);
    this.svc.getAll().subscribe({
      next:  r  => { this.all.set(r.products); this.loading.set(false); },
      error: () => { this.error.set('Errore nel caricamento.'); this.loading.set(false); },
    });
  }

  toggleAge(a: string)      { this.selectedAges.update(v => v.includes(a) ? v.filter(x=>x!==a) : [...v,a]); }
  toggleCategory(c: string) { this.selectedCategories.update(v => v.includes(c) ? v.filter(x=>x!==c) : [...v,c]); }
  toggleSize(s: string)     { this.selectedSizes.update(v => v.includes(s) ? v.filter(x=>x!==s) : [...v,s]); }
  clearFilters() { this.selectedAges.set([]); this.selectedCategories.set([]); this.selectedSizes.set([]); }

  price(p: Product) { return Math.round(p.price * (1 - p.discountPercentage / 100)); }
  open(p: Product)  { this.modal.set(p); }
  close()           { this.modal.set(null); }
}
