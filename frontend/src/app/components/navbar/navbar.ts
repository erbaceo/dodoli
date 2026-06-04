import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <!-- Announcement bar -->
    <div class="bg-dark text-white text-center py-2 px-4 text-[10px] tracking-px16 uppercase font-sans font-light">
      Nuovi arrivi ogni settimana &nbsp;·&nbsp; Spedizioni gratuite sopra €80
    </div>

    <header class="sticky top-0 z-50 bg-white" [class.shadow-sm]="scrolled()">
      <div class="grid grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8 h-14 md:h-16 border-b border-n-200">

        <!-- Left nav -->
        <nav class="hidden lg:flex items-center gap-5 xl:gap-7">
          <a routerLink="/nuovi-arrivi" routerLinkActive="nav-active"
             class="nav-link font-sans text-[10px] tracking-px8 uppercase text-n-500 hover:text-dark transition-colors whitespace-nowrap">
            Nuovi Arrivi
          </a>
          <a routerLink="/seconda-storia" routerLinkActive="nav-active"
             class="nav-link font-sans text-[10px] tracking-px8 uppercase text-n-500 hover:text-dark transition-colors whitespace-nowrap">
            Seconda Storia
          </a>
          <a routerLink="/live" routerLinkActive="nav-active"
             class="nav-link font-sans text-[10px] tracking-px8 uppercase text-n-500 hover:text-dark transition-colors whitespace-nowrap">
            Live Shopping
          </a>
        </nav>

        <!-- Center logo -->
        <a routerLink="/" class="block px-6 md:px-8">
          <img src="assets/logo.svg" alt="Dodolí Boutique"
               class="h-8 md:h-9 w-auto object-contain hover:opacity-60 transition-opacity duration-300"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='block'" />
          <span style="display:none" class="font-cormorant italic text-xl text-dark tracking-px4">Dodolí</span>
        </a>

        <!-- Right nav + icons -->
        <div class="hidden lg:flex items-center justify-end gap-5 xl:gap-6">
          <a routerLink="/scatola" routerLinkActive="nav-active"
             class="nav-link font-sans text-[10px] tracking-px8 uppercase text-n-500 hover:text-dark transition-colors whitespace-nowrap">
            Scatola Dodolí
          </a>
          <a routerLink="/affida" routerLinkActive="nav-active"
             class="nav-link font-sans text-[10px] tracking-px8 uppercase text-n-500 hover:text-dark transition-colors whitespace-nowrap">
            Affida
          </a>
          <a routerLink="/chi-siamo" routerLinkActive="nav-active"
             class="nav-link font-sans text-[10px] tracking-px8 uppercase text-n-500 hover:text-dark transition-colors whitespace-nowrap">
            Chi Siamo
          </a>
          <div class="flex items-center gap-3 ml-1 pl-4 border-l border-n-200">
            <button class="text-n-400 hover:text-dark transition-colors duration-200" aria-label="Cerca">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7"/><path stroke-linecap="round" d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button class="text-n-400 hover:text-dark transition-colors duration-200" aria-label="Lista desideri">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M21 8.5c0-2.485-2.015-4.5-4.5-4.5-1.657 0-3.1.9-3.864 2.236A4.498 4.498 0 008 4C5.515 4 3.5 6.015 3.5 8.5c0 5.42 8.5 11.5 8.5 11.5S21 13.92 21 8.5z"/>
              </svg>
            </button>
            <button class="text-n-400 hover:text-dark transition-colors duration-200" aria-label="Carrello">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile hamburger -->
        <div class="flex justify-end lg:hidden">
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

      @if (menuOpen()) {
        <div class="lg:hidden bg-white border-b border-n-200 px-8 py-8 flex flex-col gap-6">
          @for (l of links; track l.path) {
            <a [routerLink]="l.path" (click)="menuOpen.set(false)"
               class="font-sans text-[11px] tracking-px16 uppercase text-dark">{{ l.label }}</a>
          }
        </div>
      }
    </header>

    <style>
      .nav-active { color: #1A1A1A !important; }
    </style>
  `
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);
  links = [
    { path: '/nuovi-arrivi',   label: 'Nuovi Arrivi' },
    { path: '/seconda-storia', label: 'Seconda Storia' },
    { path: '/live',           label: 'Live Shopping' },
    { path: '/scatola',        label: 'Scatola Dodolí' },
    { path: '/affida',         label: 'Affida una Seconda Storia' },
    { path: '/chi-siamo',      label: 'Chi Siamo' },
  ];
  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 10); }
}
