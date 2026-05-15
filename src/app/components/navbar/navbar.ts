import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <!-- Announcement bar -->
    <div class="announcement bg-moka-d text-n-200 text-center py-2 px-4 text-[10px] tracking-px16 uppercase font-sans font-light">
      Nuovi arrivi ogni settimana &nbsp;·&nbsp; Spedizioni gratuite sopra €80
    </div>

    <!-- Main header -->
    <header class="navbar-wrap sticky top-0 z-50 transition-all duration-500"
            [class.navbar-scrolled]="scrolled()">

      <div class="navbar-inner grid grid-cols-3 items-center px-6 md:px-10 lg:px-16 h-16 md:h-20 border-b border-n-200/70">

        <!-- Left nav -->
        <nav class="hidden md:flex items-center gap-8 lg:gap-10">
          <a routerLink="/"
             routerLinkActive="text-moka"
             [routerLinkActiveOptions]="{exact:true}"
             class="nav-item font-sans font-light text-[11px] tracking-px16 uppercase text-n-500 hover:text-moka transition-colors duration-300 u-reveal">
            Home
          </a>
          <a routerLink="/products"
             routerLinkActive="text-moka"
             class="nav-item font-sans font-light text-[11px] tracking-px16 uppercase text-n-500 hover:text-moka transition-colors duration-300 u-reveal">
            Collezione
          </a>
        </nav>

        <!-- Center logo -->
        <div class="flex justify-center">
          <a routerLink="/" class="block">
            <img src="assets/logo.svg"
                 alt="Dodolí Boutique"
                 class="h-9 md:h-11 w-auto object-contain transition-opacity duration-300 hover:opacity-70"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block'" />
            <span style="display:none" class="font-cormorant italic text-xl text-moka tracking-px4">Dodolí</span>
          </a>
        </div>

        <!-- Right nav -->
        <nav class="hidden md:flex items-center gap-8 lg:gap-10 justify-end">
          <a routerLink="/about"
             routerLinkActive="text-moka"
             class="nav-item font-sans font-light text-[11px] tracking-px16 uppercase text-n-500 hover:text-moka transition-colors duration-300 u-reveal">
            Chi Siamo
          </a>
          <a href="mailto:info@dodoli.it"
             class="nav-item font-sans font-light text-[11px] tracking-px16 uppercase text-n-500 hover:text-moka transition-colors duration-300 u-reveal">
            Contatti
          </a>
        </nav>

        <!-- Mobile: hamburger right -->
        <div class="flex justify-end md:hidden">
          <button (click)="menuOpen.update(v=>!v)" class="p-2 text-moka" aria-label="Menu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
              @if (menuOpen()) {
                <path stroke-linecap="square" d="M5 5l14 14M5 19L19 5"/>
              } @else {
                <path stroke-linecap="square" d="M3 7h18M3 12h18M3 17h12"/>
              }
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      @if (menuOpen()) {
        <div class="md:hidden bg-n-50 border-b border-n-200 px-8 py-8 flex flex-col gap-6">
          @for (l of links; track l.path) {
            <a [routerLink]="l.path" (click)="menuOpen.set(false)"
               class="font-sans font-light text-[11px] tracking-px16 uppercase text-moka">{{ l.label }}</a>
          }
        </div>
      }
    </header>

    <style>
      .announcement { position: relative; z-index: 60; }
      .navbar-wrap { background: rgba(253,251,248,0.0); }
      .navbar-inner { background: rgba(253,251,248,0.94); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
      .navbar-scrolled .navbar-inner { box-shadow: 0 1px 0 rgba(200,186,164,0.4); }
    </style>
  `
})
export class NavbarComponent {
  scrolled  = signal(false);
  menuOpen  = signal(false);
  links = [
    { path: '/',         label: 'Home' },
    { path: '/products', label: 'Collezione' },
    { path: '/about',    label: 'Chi Siamo' },
    { path: '/about',    label: 'Contatti' },
  ];
  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 10); }
}
