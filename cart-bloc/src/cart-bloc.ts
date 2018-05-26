import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem, Product } from './model';

export class CartBloc {
  private _items = new BehaviorSubject<CartItem[]>([]);
  public items: Observable<CartItem[]> = this._items.asObservable();
  public count: Observable<number> = this.items.pipe(map(items => items.length));

  public addToCart = (product: Product, count: number) => {
    const current = this._items.getValue();
    const index = current.findIndex(item => item.product.id === product.id);
    if (index === -1) {
      this._items.next([...current, { product, count }]);
    } else {
      const nextCart = current.map((item, i) => i === index ? ({ ...item, count: item.count + count }) : item);
      this._items.next(nextCart);
    }
  };
}

export const products: Product[] = [
  { id: 1, name: 'Sweater', color: '#536DFE' },
  { id: 2, name: 'Socks', color: '#FFD500' },
  { id: 3, name: 'Shawl', color: '#1CE8B5' },
  { id: 4, name: 'Jacket', color: '#FF6C00' },
  { id: 5, name: 'Hat', color: '#574DDD' },
  { id: 6, name: 'Hoodie', color: '#ABD0F2' },
  { id: 7, name: 'Tuxedo', color: '#8DA0FC' },
  { id: 8, name: 'Shirt', color: '#1CE8B5' },
];
