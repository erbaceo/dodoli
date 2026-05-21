import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ProductsService, Product } from '../../services/products';

type Tab = 'new' | 'ceremony' | 'second' | 'packaging';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './products.html',
  styleUrl:    './products.scss',
})
export class ProductsComponent implements OnInit {
  private svc   = inject(ProductsService);
  private route = inject(ActivatedRoute);

  all     = signal<Product[]>([]);
  loading = signal(true);
  error   = signal<string | null>(null);
  tab     = signal<Tab>('new');
  modal   = signal<Product | null>(null);

  tabs: { key: Tab; label: string; desc: string }[] = [
    { key: 'new',       label: 'Nuovi Arrivi',            desc: 'Le ultime novità in boutique' },
    { key: 'ceremony',  label: 'Cerimonia',               desc: 'Per i momenti indimenticabili' },
    { key: 'second',    label: 'Second Hand Selezionato', desc: 'Pezzi unici, curati con amore' },
    { key: 'packaging', label: 'Packaging Dodolí',        desc: 'Confezioni regalo esclusive' },
  ];

  products = computed(() => {
    const p = this.all();
    switch (this.tab()) {
      case 'new':       return p.filter((_, i) => i % 4 !== 0).slice(0, 24);
      case 'ceremony':  return p.filter(x => ['womens-dresses','tops-womens','mens-suits'].includes(x.category)).slice(0, 24);
      case 'second':    return p.filter((_, i) => i % 3 === 0).slice(0, 24);
      case 'packaging': return p.filter(x => x.category.includes('beauty') || x.category.includes('fragrances') || x.category.includes('skin')).slice(0, 20);
    }
  });

  currentTab = computed(() => this.tabs.find(t => t.key === this.tab())!);

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      const t = p['tab'] as Tab;
      if (t && this.tabs.find(x => x.key === t)) this.tab.set(t);
    });
    this.svc.getAll().subscribe({
      next: r  => { this.all.set(r.products); this.loading.set(false); },
      error: () => { this.error.set('Errore nel caricamento.'); this.loading.set(false); }
    });
  }

  price(p: Product) { return Math.round(p.price * (1 - p.discountPercentage / 100)); }
  open(p: Product)  { this.modal.set(p); }
  close()           { this.modal.set(null); }
}
