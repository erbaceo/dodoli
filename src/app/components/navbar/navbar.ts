import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <!-- Announcement bar — dark, Smallable-style -->
    <div class="announcement bg-dark text-white text-center py-2 px-4 text-[10px] tracking-px16 uppercase font-sans font-light">
      Nuovi arrivi ogni settimana &nbsp;·&nbsp; Spedizioni gratuite sopra €80
    </div>

    <!-- Main header — always white, clean border -->
    <header class="navbar-wrap sticky top-0 z-50"
            [class.navbar-scrolled]="scrolled()">

      <div class="navbar-inner grid grid-cols-3 items-center px-6 md:px-10 lg:px-16 h-14 md:h-16 border-b border-n-200">

        <!-- Left nav -->
        <nav class="hidden md:flex items-center gap-8 lg:gap-10">
          <a routerLink="/"
             routerLinkActive="nav-active"
             [routerLinkActiveOptions]="{exact:true}"
             class="nav-item font-sans text-[11px] tracking-px16 uppercase text-n-500 hover:text-dark transition-colors duration-200 u-reveal">
            Home
          </a>
          <a routerLink="/products"
             routerLinkActive="nav-active"
             class="nav-item font-sans text-[11px] tracking-px16 uppercase text-n-500 hover:text-dark transition-colors duration-200 u-reveal">
            Collezione
          </a>
        </nav>

        <!-- Center logo -->
        <div class="flex justify-center">
          <a routerLink="/" class="block">
            <img src="assets/logo.svg"
                 alt="Dodolí Boutique"
                 class="h-8 md:h-9 w-auto object-contain transition-opacity duration-300 hover:opacity-60"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block'" />
            <span style="display:none" class="font-cormorant italic text-xl text-dark tracking-px4">Dodolí</span>
          </a>
        </div>

        <!-- Right nav -->
        <nav class="hidden md:flex items-center gap-8 lg:gap-10 justify-end">
          <a routerLink="/about"
             routerLinkActive="nav-active"
             class="nav-item font-sans text-[11px] tracking-px16 uppercase text-n-500 hover:text-dark transition-colors duration-200 u-reveal">
            Chi Siamo
          </a>
          <a href="mailto:info@dodoli.it"
             class="nav-item font-sans text-[11px] tracking-px16 uppercase text-n-500 hover:text-dark transition-colors duration-200 u-reveal">
            Contatti
          </a>
          <!-- Search icon -->
          <button class="text-n-400 hover:text-dark transition-colors duration-200" aria-label="Cerca">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7"/><path stroke-linecap="round" d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </nav>

        <!-- Mobile: hamburger right -->
        <div class="flex justify-end md:hidden">
          <button (click)="menuOpen.update(v=>!v)" class="p-2 text-dark" aria-label="Menu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              @if (menuOpen()) {
                <path stroke-linecap="round" d="M5 5l14 14M5 19L19 5"/>
              } @else {
                <path stroke-linecap="round" d="M3 7h18M3 12h18M3 17h12"/>
              }
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      @if (menuOpen()) {
        <div class="md:hidden bg-white border-b border-n-200 px-8 py-8 flex flex-col gap-6">
          @for (l of links; track l.path) {
            <a [routerLink]="l.path" (click)="menuOpen.set(false)"
               class="font-sans text-[11px] tracking-px16 uppercase text-dark">{{ l.label }}</a>
          }
        </div>
      }
    </header>

    <style>
      .announcement { position: relative; z-index: 60; }
      .navbar-wrap { background: #FFFFFF; }
      .navbar-inner { background: #FFFFFF; }
      .navbar-scrolled { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
      .nav-active { color: #1A1A1A !important; }
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
