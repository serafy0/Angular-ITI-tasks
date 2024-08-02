import { Injectable } from '@angular/core';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  items: Item[] = [
    {
      id: 2,
      name: 'Pizze',
      ingr: ['bread', 'tomato'],
      price: 10,
      quantity: 10,
      type: 'pizza',
      available: true,
      img: 'https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
    },
    {
      id: 1,
      name: 'bashmeal',
      ingr: ['milk', 'pasta'],
      price: 20,
      quantity: 10,
      available: true,
      type: 'oriental',
      img: 'https://www.maggiarabia.com/sites/default/files/styles/image_375_400/public/srh_recipes/e59c09444892a72653813f130a2d9ae2.png?h=4f5b30f1&itok=94MGwFrJ',
    },
  ];

  getItems(): Item[] {
    return this.items;
  }
}
