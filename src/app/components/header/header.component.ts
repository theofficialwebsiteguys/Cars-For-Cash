import { Component, Input } from '@angular/core';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CtaButtonComponent, LogoComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() navigationItems: { label: string, link: string }[] = [
    { label: 'How It Works', link: '/how-it-works' },
    { label: 'About Us', link: '/about' },
  ];
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
