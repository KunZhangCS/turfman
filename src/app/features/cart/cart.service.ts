import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  get count$() {
    return this.itemsSubject.asObservable().pipe(
      map(items => items.reduce((sum, item) => sum + item.quantity, 0))
    );
  }

  getItems() {
    return this.itemsSubject.value;
  }

  addItem(item: CartItem) {
    const items = [...this.itemsSubject.value];
    const idx = items.findIndex(i => i.id === item.id);
    if (idx > -1) {
      items[idx].quantity += item.quantity;
    } else {
      items.push(item);
    }
    this.itemsSubject.next(items);
  }

  updateQuantity(id: string, quantity: number) {
    const items = this.itemsSubject.value.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    this.itemsSubject.next(items);
  }

  removeItem(id: string) {
    const items = this.itemsSubject.value.filter(item => item.id !== id);
    this.itemsSubject.next(items);
  }

  clear() {
    this.itemsSubject.next([]);
  }
} 