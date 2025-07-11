import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CartService } from '../features/cart/cart.service';

@Component({
  selector: 'app-fab-buttons',
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './fab-buttons.component.html',
  styleUrls: ['./fab-buttons.component.scss']
})
export class FabButtonsComponent {
  cartService = inject(CartService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  openContactDialog() {
    // Placeholder: Implement dialog open logic
    alert('Contact dialog will open here.');
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
} 