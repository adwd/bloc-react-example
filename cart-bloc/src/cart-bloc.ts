import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartAddition, CartItem, Product } from './model';

export class CartBloc {
  private _items = new BehaviorSubject<CartItem[]>([]);
  public get items(): Observable<CartItem[]> {
    return this._items.asObservable();
  }
  public get count(): Observable<number> {
    return this.items.pipe(map(items => items.length));
  }

  public addToCart = new Subject<CartAddition>();

  constructor() {
    this.addToCart.subscribe(addition => {
      this.add(addition.product, addition.count);
    })
  }

  private add = (product: Product, count: number) => {
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
