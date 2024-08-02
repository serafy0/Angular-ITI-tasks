import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.interface';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input({ required: true }) item!: Item;

  count = 0;
  onD() {
    if (this.count > 0) {
      this.count--;
    }
  }
  onI() {
    if (this.count < this.item.quantity) {
      this.count++;
    }
  }

  onChange(sign: string) {
    if (sign == '+') {
      this.onI();
    } else {
      this.onD();
    }
  }

  onOrder() {
    console.log(this.count);
  }
}
