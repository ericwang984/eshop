import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;
  // tslint:disable-next-line:no-input-rename
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }


  getQuantity() {
    // tslint:disable-next-line:curly
    if (!this.shoppingCart) return 0;
    // tslint:disable-next-line:prefer-const
    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }

}
