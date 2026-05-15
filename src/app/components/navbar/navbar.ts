import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class.scrolled]="scrolled()">

      <!-- Top bar -->
      <div class="top-bar border-b border-gold/20 text-center py-1.5 text-[10px] tracking-ultra text-moka font-caption uppercase hidden md:block">
        Spedizioni gratuite in Italia · Nuovi arrivi ogni settimana
      </div>

      <!-- Main nav -->
      <nav class="nav-inner px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">

        <!-- Left links -->
        <div class="hidden md:flex items-center gap-10">
          <a routerLink="/" routerLinkActive="nav-active" [routerLinkActiveOptions]="{exact:true}"
             class="nav-link font-body text-[11px] tracking-wide-xl uppercase text-moka hover:text-gold transition-colors duration-300">
            Home
          </a>
          <a routerLink="/products" routerLinkActive="nav-active"
             class="nav-link font-body text-[11px] tracking-wide-xl uppercase text-moka hover:text-gold transition-colors duration-300">
            Collezione
          </a>
        </div>

        <!-- Center logo -->
        <a routerLink="/" class="flex-1 md:flex-none flex justify-center md:justify-start">
          <img src="assets/logo_esteso.png" alt="Dodolí Boutique"
               class="h-14 md:h-16 transition-all duration-500 object-contain rounded-full"
               onerror="this.src='assets/logo_esteso.svg'" />
        </a>

        <!-- Right links -->
        <div class="hidden md:flex items-center gap-10">
          <a routerLink="/about" routerLinkActive="nav-active"
             class="nav-link font-body text-[11px] tracking-wide-xl uppercase text-moka hover:text-gold transition-colors duration-300">
            Chi Siamo
          </a>
          <a href="mailto:info@dodoli.it"
             class="font-body text-[11px] tracking-wide-xl uppercase text-moka hover:text-gold transition-colors duration-300">
            Contatti
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button class="md:hidden text-moka p-2 absolute right-4" (click)="menuOpen.update(v => !v)">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            @if (menuOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h7"/>
            }
          </svg>
        </button>
      </nav>

      <!-- Mobile menu -->
      @if (menuOpen()) {
        <div class="md:hidden mobile-menu border-t border-avorio px-8 py-6 flex flex-col gap-5">
          @for (link of mobileLinks; track link.path) {
            <a [routerLink]="link.path" (click)="menuOpen.set(false)"
               class="font-body text-xs tracking-ultra uppercase text-moka">{{ link.label }}</a>
          }
        </div>
      }
    </header>

    <style>
      .top-bar { background: #FAF7F2; }
      .nav-inner { background: rgba(250,247,242,0.92); backdrop-filter: blur(16px); }
      header.scrolled .nav-inner {
        background: rgba(250,247,242,0.98);
        box-shadow: 0 1px 20px rgba(124,92,66,0.08);
      }
      .nav-link { position: relative; }
      .nav-link::after {
        content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
        height: 1px; background: #C9A96E; transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      .nav-link:hover::after, .nav-active::after { transform: scaleX(1); }
      .mobile-menu { background: rgba(250,247,242,0.98); }
    </style>
  `
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  mobileLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Collezione' },
    { path: '/about', label: 'Chi Siamo' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 40); }
}
