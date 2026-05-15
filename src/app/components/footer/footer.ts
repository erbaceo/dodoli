import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-moka-dark text-latte/80 pt-16 pb-8 px-6 md:px-16">
      <div class="max-w-6xl mx-auto">

        <!-- Logo + tagline -->
        <div class="flex flex-col items-center mb-12">
          <img src="assets/logo_esteso.png" alt="Dodolí" class="h-16 mb-4"
               onerror="this.src='assets/logo_esteso.svg'" />
          <p class="font-display italic text-lg text-cipria-light/60 tracking-widest">
            piccole cose, grandi ricordi
          </p>
        </div>

        <div class="border-t border-latte/10 pt-10 grid md:grid-cols-3 gap-10 text-center md:text-left">
          <!-- Negozio -->
          <div>
            <h4 class="font-body text-[10px] tracking-ultra uppercase text-gold/70 mb-4">Il Negozio</h4>
            <p class="font-light text-sm leading-relaxed text-latte/50">Via dei Giardini 12<br>41121 Modena (MO)</p>
            <p class="font-light text-sm mt-3 text-latte/50">Lun–Ven  9:30–13 / 15:30–19<br>Sab  9:30–13:00</p>
          </div>
          <!-- Nav -->
          <div class="flex flex-col items-center gap-3">
            @for (l of links; track l.path) {
              <a [routerLink]="l.path" class="font-body text-[11px] tracking-wide-xl uppercase text-latte/40 hover:text-gold transition-colors">
                {{ l.label }}
              </a>
            }
          </div>
          <!-- Contatti -->
          <div class="md:text-right">
            <h4 class="font-body text-[10px] tracking-ultra uppercase text-gold/70 mb-4">Contatti</h4>
            <p class="font-light text-sm text-latte/50">info&#64;dodoli.it</p>
            <p class="font-light text-sm text-latte/50 mt-1">+39 059 123 4567</p>
            <div class="flex gap-4 mt-4 justify-center md:justify-end">
              <a href="#" class="text-latte/30 hover:text-cipria transition-colors text-xl">◎</a>
              <a href="#" class="text-latte/30 hover:text-cipria transition-colors text-xl">✦</a>
            </div>
          </div>
        </div>

        <div class="border-t border-latte/10 mt-10 pt-6 text-center">
          <p class="font-caption text-[10px] tracking-widest uppercase text-latte/25">
            © 2025 Dodolí Boutique · Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Collezione' },
    { path: '/about', label: 'Chi Siamo' },
  ];
}
