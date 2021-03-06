import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';


export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};

        // tslint:disable-next-line:forin
        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem({
                // title: item.title,
                // imageUrl: item.imageUrl,
                // price: item.price,
                ...item,
                $key: productId
            }));
        }
    }

    get productIds() {
        return Object.keys(this.itemsMap);
    }

    getQuantity(product: Product) {
        // tslint:disable-next-line:prefer-const
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        // tslint:disable-next-line:forin
        for (let productId in this.items) {
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        // tslint:disable-next-line:forin
        for (let productId in this.itemsMap) {
            count += this.itemsMap[productId].quantity;
        }
        return count;
    }
}
