import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  values = [
    { icon: '♥', title: 'Amore per le cose belle',   body: 'Ogni capo che entra in boutique è selezionato con la stessa cura che metteresti per i tuoi figli.' },
    { icon: '⟳', title: 'Sostenibilità e rispetto',  body: 'I bambini crescono in fretta. Dare nuova vita ai loro abiti è il gesto più intelligente che possiamo fare.' },
    { icon: '◊', title: 'Relazioni e fiducia',       body: 'Dodolí non è solo un negozio. È una comunità di famiglie che si fidano le une delle altre.' },
    { icon: '◎', title: 'Ricordi che durano',        body: 'Un vestitino conserva l\'energia di chi lo ha indossato. Regalarlo è continuare quella storia.' },
  ];

  milestones = [
    { year: '2018', text: 'Primo mercatino nel cortile di casa. Tutto esaurito in due ore.' },
    { year: '2019', text: 'Apertura del negozio fisico in Via dei Giardini, Modena.' },
    { year: '2021', text: 'Lancio della Seconda Storia — seconda mano selezionato.' },
    { year: '2023', text: 'Nasce la Scatola Dodolí e le prime live su Instagram.' },
    { year: '2025', text: 'Apertura del sito. Dodolí arriva anche a casa tua.' },
  ];
}
