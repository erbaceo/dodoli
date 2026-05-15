import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  credit: string;
  position: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl:    './home.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  animating = signal(false);
  private timer: any;

  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1400&q=85&fit=crop',
      credit: 'Bambino abito delicato',
      position: 'center 30%',
    },
    {
      image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1400&q=85&fit=crop',
      credit: 'Mani bambino con madre',
      position: 'center center',
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop',
      credit: 'Fiocchi e dettagli',
      position: 'center 40%',
    },
    {
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1400&q=85&fit=crop',
      credit: 'Tessuti pregiati',
      position: 'center 20%',
    },
    {
      image: './assets/Packaging.jpeg',
      credit: 'Packaging Dodolí',
      position: '',
    }
  ];

  categories = [
    { key: 'new',      icon: '✦', label: 'Nuovi Arrivi',        sub: 'Le ultime novità in boutique' },
    { key: 'ceremony', icon: '◇', label: 'Cerimonia',           sub: 'Per i momenti indimenticabili' },
    { key: 'second',   icon: '♻', label: 'Second Hand Selezionato', sub: 'Pezzi unici, curati con amore' },
    { key: 'packaging',icon: '◈', label: 'Packaging Dodolí',    sub: 'Confezioni regalo esclusive' },
  ];

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startTimer() {
    this.timer = setInterval(() => this.next(), 5000);
  }

  next() {
    this.animating.set(true);
    setTimeout(() => {
      this.currentSlide.update(i => (i + 1) % this.slides.length);
      this.animating.set(false);
    }, 400);
  }

  goTo(index: number) {
    if (index === this.currentSlide()) return;
    clearInterval(this.timer);
    this.animating.set(true);
    setTimeout(() => {
      this.currentSlide.set(index);
      this.animating.set(false);
      this.startTimer();
    }, 400);
  }
}
