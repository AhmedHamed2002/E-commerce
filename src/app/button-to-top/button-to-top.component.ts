import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-to-top.component.html',
  styleUrl: './button-to-top.component.css'
})
export class ButtonToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 100; // Show button after scrolling down 300px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
