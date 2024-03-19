import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  router = inject(Router);
  CreateClicked() {
    this.router.navigateByUrl('create');
  }
  onHomeIconClicked() {
    this.router.navigateByUrl('home');
  }
}
