import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-dark text-white pt-16 pb-10 px-6 md:px-16 mt-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid md:grid-cols-4 gap-10 md:gap-6 mb-14">

          <!-- Brand -->
          <div class="md:col-span-1">
            <img src="assets/logo_esteso.svg" alt="Dodolí" class="mb-4 opacity-60 brightness-0 invert"
                 onerror="this.src='assets/logo.svg'" />
            <p class="font-cormorant italic text-white/50 text-base leading-relaxed">
              piccole cose,<br>grandi ricordi.
            </p>
          </div>

          <!-- Collezione -->
          <div>
            <p class="font-sans font-medium text-[10px] tracking-px24 uppercase text-white/40 mb-5">Collezione</p>
            <ul class="space-y-3">
              @for (l of collection; track l.label) {
                <li>
                  <a [routerLink]="l.path"
                     class="font-sans text-[12px] text-white/70 hover:text-white transition-colors duration-200">
                    {{ l.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Info -->
          <div>
            <p class="font-sans font-medium text-[10px] tracking-px24 uppercase text-white/40 mb-5">Informazioni</p>
            <ul class="space-y-3">
              @for (l of info; track l.label) {
                <li>
                  <a [routerLink]="l.path"
                     class="font-sans text-[12px] text-white/70 hover:text-white transition-colors duration-200">
                    {{ l.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Negozio -->
          <div>
            <p class="font-sans font-medium text-[10px] tracking-px24 uppercase text-white/40 mb-5">Il Negozio</p>
            <address class="not-italic font-sans text-[12px] text-white/60 leading-relaxed space-y-1">
              <p>Via dei Giardini 12</p>
              <p>41121 Modena (MO)</p>
              <p class="mt-3">Lun–Ven &nbsp; 9:30–19:00</p>
              <p>Sabato &nbsp; 9:30–13:00</p>
              <p class="mt-3">
                <a href="mailto:info@dodoli.it" class="text-white/70 hover:text-white transition-colors duration-200">
                  info&#64;dodoli.it
                </a>
              </p>
            </address>
          </div>
        </div>

        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p class="font-sans text-[10px] tracking-px8 text-white/30 uppercase">
            © 2025 Dodolí Boutique · Tutti i diritti riservati
          </p>
          <p class="font-sans text-[10px] tracking-px8 text-white/30 uppercase">
            Modena · Italia
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  collection = [
    { path: '/nuovi-arrivi',   label: 'Nuovi Arrivi' },
    { path: '/seconda-storia', label: 'Seconda Storia' },
    { path: '/live',           label: 'Live Shopping' },
    { path: '/scatola',        label: 'Scatola Dodolí' },
  ];
  info = [
    { path: '/chi-siamo', label: 'Chi Siamo' },
    { path: '/affida',    label: 'Affida una Seconda Storia' },
  ];
}
