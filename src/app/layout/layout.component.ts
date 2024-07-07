import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teatown-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  windowScrolled = false;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.windowScrolled = window.pageYOffset !== 0;
      });
    }
  }

  scrollToTop(): void {
    // todo this also works if the scroll behaviour is horizontal => perfect for Cody's trip
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
