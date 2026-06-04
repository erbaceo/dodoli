import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './live.html',
})
export class LiveComponent {
  schedule = [
    { day: 'Martedì',  time: '21:00', theme: 'Nuovi Arrivi della settimana' },
    { day: 'Giovedì',  time: '21:00', theme: 'Seconda Storia — Focus Brand' },
    { day: 'Domenica', time: '21:00', theme: 'Live Speciale & Sorprese' },
  ];

  steps = [
    { n: '01', title: 'Seguici su Instagram', body: 'Attiva le notifiche per non perdere nessuna live. Ci trovi su @dodoli_boutique.' },
    { n: '02', title: 'Partecipa alla Live',  body: 'Commenta con la tua taglia per prenotare un capo. Prima chi commenta, prima viene servito.' },
    { n: '03', title: 'Ricevi il tuo ordine', body: 'Confermiamo in DM e spediamo entro 48 ore. Nessun costo nascosto.' },
  ];
}
