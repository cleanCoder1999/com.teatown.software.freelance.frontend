import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutComponent,
    NgClass,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teatown-freelance-frontend';
  isFocussed = false;

  @ViewChild('cursor')
  cursor: ElementRef | null = null;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.cursor) {
      // todo how can I avoid to access the nativeElement??
      this.cursor.nativeElement.style.left = e.clientX + 'px';
      this.cursor.nativeElement.style.top = e.clientY + 'px';
    }
  }

  onFocus($event: boolean) {
    this.isFocussed = $event;
  }
}
