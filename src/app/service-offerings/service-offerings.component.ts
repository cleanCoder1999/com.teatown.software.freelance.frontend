import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/ScrollAnimationDirective';

@Component({
  selector: 'teatown-service-offerings',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './service-offerings.component.html',
  styleUrl: './service-offerings.component.scss'
})
export class ServiceOfferingsComponent {}
