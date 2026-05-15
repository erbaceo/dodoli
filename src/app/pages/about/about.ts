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
    { icon: '◇', title: 'Selezione',     desc: 'Ogni capo viene ispezionato personalmente. Se non ci piace, non lo vendiamo.' },
    { icon: '♻', title: 'Sostenibilità', desc: 'Dare nuova vita ai vestiti non è solo romantico: è necessario. E noi ci crediamo davvero.' },
    { icon: '♡', title: 'Comunità',      desc: 'Siamo un punto d\'incontro per famiglie di Modena che condividono i nostri valori.' },
  ];

  timeline = [
    { year: '2018', icon: '✦', title: 'Il primo mercatino',  desc: 'Un tavolo nel cortile di casa, una scatola di vestitini. Tutto esaurito in due ore.' },
    { year: '2019', icon: '◎', title: 'Il negozio apre',     desc: '40 mq in Via dei Giardini. Piccolo, curato, tutto nostro.' },
    { year: '2021', icon: '◇', title: 'Nasce il second hand selezionato', desc: 'Iniziamo a comprare capi usati e riproporli dopo una selezione rigorosa.' },
    { year: '2023', icon: '◈', title: 'Il packaging Dodolí', desc: 'Lanciamo le nostre confezioni regalo. Ogni scatola è un\'esperienza.' },
    { year: '2025', icon: '★', title: 'Siamo online',        desc: 'Il sito nasce per portare Dodolí anche fuori da Modena.' },
  ];
}
