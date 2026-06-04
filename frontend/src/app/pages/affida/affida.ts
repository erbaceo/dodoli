import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-affida',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './affida.html',
})
export class AffidaComponent {
  steps = [
    { n: '01', title: 'Compila il modulo',    body: 'Descrivici i capi: tipo, taglia, marca, condizioni. Nessun obbligo fino all\'accettazione.' },
    { n: '02', title: 'Selezione',            body: 'Valutiamo ogni pezzo. Accettiamo solo capi in ottimo stato, puliti e pronti per una nuova vita.' },
    { n: '03', title: 'Pubblicazione online', body: 'I capi accettati vengono fotografati e pubblicati nel nostro shop Seconda Storia.' },
    { n: '04', title: 'Vendita',              body: 'Quando il capo viene venduto ti notifichiamo subito. Nessun anticipo, nessun rischio.' },
    { n: '05', title: 'Il tuo ricavato',      body: '50% del prezzo di vendita è tuo. In credito negozio (+10% bonus) o in contanti.' },
  ];
}
