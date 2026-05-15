import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../../services/products';

type Tab = 'new' | 'ceremony' | 'second' | 'packaging';

interface TabConfig {
  key: Tab;
  label: string;
  sub: string;
  filterFn: (p: Product, idx: number) => boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl:    './products.scss',
})
export class ProductsComponent implements OnInit {
  private svc   = inject(ProductsService);
  private route = inject(ActivatedRoute);

  allProducts  = signal<Product[]>([]);
  loading      = signal(true);
  error        = signal<string | null>(null);
  activeTab    = signal<Tab>('new');
  selectedProduct = signal<Product | null>(null);

  tabs: TabConfig[] = [
    {
      key: 'new',
      label: 'Nuovi Arrivi',
      sub: 'Le ultime novità',
      filterFn: (_, i) => i % 4 !== 3,
    },
    {
      key: 'ceremony',
      label: 'Cerimonia',
      sub: 'Per i giorni speciali',
      filterFn: (p) => ['womens-dresses','tops-womens','mens-suits'].includes(p.category),
    },
    {
      key: 'second',
      label: 'Second Hand Selezionato',
      sub: 'Pezzi unici curati',
      filterFn: (_, i) => i % 3 === 0,
    },
    {
      key: 'packaging',
      label: 'Packaging Dodolí',
      sub: 'Confezioni regalo',
      filterFn: (p) => p.category.includes('beauty') || p.category.includes('fragrances') || p.category.includes('skin'),
    },
  ];

  visibleProducts = computed(() => {
    const tab = this.tabs.find(t => t.key === this.activeTab())!;
    return this.allProducts().filter(tab.filterFn).slice(0, 24);
  });

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const cat = params['category'] as Tab;
      if (cat && this.tabs.find(t => t.key === cat)) {
        this.activeTab.set(cat);
      }
    });

    this.svc.getAll().subscribe({
      next: (res) => { this.allProducts.set(res.products); this.loading.set(false); },
      error: ()  => { this.error.set('Impossibile caricare i prodotti.'); this.loading.set(false); }
    });
  }

  discounted(p: Product) {
    return Math.round(p.price * (1 - p.discountPercentage / 100));
  }

  openModal(p: Product) { this.selectedProduct.set(p); }
  closeModal() { this.selectedProduct.set(null); }
}
