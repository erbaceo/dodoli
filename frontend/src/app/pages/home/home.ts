import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl:    './home.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  current  = signal(0);
  private timer: any;

  slides = [
    { url: './assets/packaging.jpeg', pos: '' },
    { url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1600&q=90&fit=crop&crop=center', pos: 'center 25%' },
    { url: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1600&q=90&fit=crop', pos: 'center center' },
    { url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&q=90&fit=crop', pos: 'center 30%' },
    { url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=90&fit=crop', pos: 'center 20%' },
  ];

  tickerItems = [
    'Abbigliamento Bambini', '·', 'Nuovi Arrivi', '·', 'Seconda Storia', '·',
    'Live Shopping', '·', 'Scatola Dodolí', '·', 'Modena',
    '·', 'Abbigliamento Bambini', '·', 'Nuovi Arrivi', '·', 'Seconda Storia', '·',
    'Live Shopping', '·', 'Scatola Dodolí', '·', 'Modena', '·',
  ];

  editorials = [
    {
      title: 'Nuovi Arrivi',
      sub: 'SS 2025',
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&q=85&fit=crop',
      path: '/nuovi-arrivi',
    },
    {
      title: 'Seconda Storia',
      sub: 'Selezionato con cura',
      img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=85&fit=crop',
      path: '/seconda-storia',
    },
    {
      title: 'Live Shopping',
      sub: 'Martedì · Giovedì · Domenica',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&fit=crop&crop=top',
      path: '/live',
    },
  ];

  liveSchedule = [
    { day: 'Martedì',  time: '21:00', note: 'Nuovi Arrivi' },
    { day: 'Giovedì',  time: '21:00', note: 'Seconda Storia' },
    { day: 'Domenica', time: '21:00', note: 'Live Speciale' },
  ];

  scatolaSteps = [
    { label: 'Attiva',     desc: 'Scegli età e preferenze' },
    { label: 'Partecipa',  desc: 'Segui le live settimanali' },
    { label: 'Accumula',   desc: 'Ogni like vale stelle' },
    { label: 'Ricevi',     desc: 'La scatola arriva a casa' },
  ];

  ngOnInit()    { this.timer = setInterval(() => this.advance(), 5500); }
  ngOnDestroy() { clearInterval(this.timer); }
  advance() { this.current.update(i => (i + 1) % this.slides.length); }
  goTo(i: number) { clearInterval(this.timer); this.current.set(i); this.timer = setInterval(() => this.advance(), 5500); }
}
