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
    { title: 'Selezione rigorosa',  body: 'Ogni capo — nuovo o usato — passa dal nostro sguardo prima di entrare in boutique. Nessun compromesso sulla qualità.' },
    { title: 'Economia circolare',  body: 'I bambini crescono in fretta. Noi restituiamo vita a ciò che è stato amato, riducendo lo spreco senza ridurre la bellezza.' },
    { title: 'Attenzione al dettaglio', body: 'Dal nastro sulla confezione al bigliettino scritto a mano. Ogni acquisto da Dodolí è un\'esperienza, non solo una transazione.' },
  ];

  milestones = [
    { year: '2018', text: 'Primo mercatino nel cortile di casa. Tutto esaurito in due ore.' },
    { year: '2019', text: 'Apertura del negozio fisico in Via dei Giardini, Modena.' },
    { year: '2021', text: 'Lancio del servizio Second Hand Selezionato.' },
    { year: '2023', text: 'Nasce il Packaging Dodolí: ogni regalo diventa un\'emozione.' },
    { year: '2025', text: 'Apertura del sito. Dodolí arriva anche a casa tua.' },
  ];
}
