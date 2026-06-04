import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scatola',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './scatola.html',
})
export class ScatolaComponent {
  steps = [
    { n: '01', title: 'Attiva la tua Scatola', body: 'Acquista un abbonamento mensile. Scegli la fascia d\'età e le tue preferenze di stile.' },
    { n: '02', title: 'Partecipa alle Live',   body: 'Durante le live settimanali, accumula stelle mettendo cuori e commentando. Ogni interazione conta.' },
    { n: '03', title: 'Accumula Stelle',       body: 'Le stelle si trasformano in crediti acquisto. Più partecipi, più ricevi.' },
    { n: '04', title: 'Ricevi la tua Scatola', body: 'Ogni mese una scatola curata arriva a casa tua. Capi selezionati, confezione speciale, sorpresa inclusa.' },
  ];

  faqs = [
    { q: 'Quanto costa?', a: 'L\'abbonamento mensile parte da €12 di attivazione. I capi nella scatola vengono pagati al momento della ricezione.' },
    { q: 'Posso disdire?', a: 'Sì, puoi disdire in qualsiasi momento prima del rinnovo mensile. Nessuna penale.' },
    { q: 'Come vengono scelti i capi?', a: 'Ogni scatola è curata da noi in base all\'età e alle preferenze che hai indicato all\'attivazione.' },
  ];
}
