import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="border-t border-n-200 bg-n-100 pt-16 pb-10 px-6 md:px-16 mt-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid md:grid-cols-4 gap-10 md:gap-6 mb-14">

          <!-- Brand -->
          <div class="md:col-span-1">
            <img src="assets/logo_esteso.svg" alt="Dodolí" class="mb-4 opacity-80"
                 onerror="this.src='assets/logo.svg'" />
            <p class="font-cormorant italic text-n-500 text-base leading-relaxed">
              piccole cose,<br>grandi ricordi.
            </p>
          </div>

          <!-- Collezione -->
          <div>
            <p class="font-sans font-medium text-[10px] tracking-px24 uppercase text-n-400 mb-5">Collezione</p>
            <ul class="space-y-3">
              @for (l of collection; track l) {
                <li>
                  <a [routerLink]="['/products']" [queryParams]="{tab: l.key}"
                     class="font-sans font-light text-[12px] text-n-500 hover:text-moka transition-colors u-reveal">
                    {{ l.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Info -->
          <div>
            <p class="font-sans font-medium text-[10px] tracking-px24 uppercase text-n-400 mb-5">Informazioni</p>
            <ul class="space-y-3">
              @for (l of info; track l) {
                <li>
                  <a [routerLink]="l.path"
                     class="font-sans font-light text-[12px] text-n-500 hover:text-moka transition-colors u-reveal">
                    {{ l.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Contatti -->
          <div>
            <p class="font-sans font-medium text-[10px] tracking-px24 uppercase text-n-400 mb-5">Il Negozio</p>
            <address class="not-italic font-sans font-light text-[12px] text-n-500 leading-relaxed space-y-1">
              <p>Via dei Giardini 12</p>
              <p>41121 Modena (MO)</p>
              <p class="mt-3">Lun–Ven &nbsp; 9:30–19:00</p>
              <p>Sabato &nbsp; 9:30–13:00</p>
              <p class="mt-3">
                <a href="mailto:info@dodoli.it" class="hover:text-moka transition-colors u-reveal">
                  info&#64;dodoli.it
                </a>
              </p>
            </address>
          </div>
        </div>

        <div class="border-t border-n-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p class="font-sans font-light text-[10px] tracking-px8 text-n-400 uppercase">
            © 2025 Dodolí Boutique · Tutti i diritti riservati
          </p>
          <p class="font-sans font-light text-[10px] tracking-px8 text-n-400 uppercase">
            Modena · Italia
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  collection = [
    { key: 'new',       label: 'Nuovi Arrivi' },
    { key: 'ceremony',  label: 'Cerimonia' },
    { key: 'second',    label: 'Second Hand' },
    { key: 'packaging', label: 'Packaging' },
  ];
  info = [
    { path: '/about', label: 'Chi Siamo' },
    { path: '/about', label: 'Contatti' },
  ];
}
