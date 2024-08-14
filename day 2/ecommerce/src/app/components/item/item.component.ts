import { Component, inject, Input } from '@angular/core';
import { Item } from '../../models/item.interface';
import { ItemService } from '../../services/item.service';
import { ItemApiService } from '../../services/itemApi/item-api.service';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input({ required: true }) item!: Item;
  itemSrv = inject(ItemService);
  itemApiSrc = inject(ItemApiService);

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
    // this.itemSrv.updateItems(this.item!.id, this.count);
    let updatedItem: Item = this.item;
    updatedItem.quantity = updatedItem.quantity - this.count;
    this.itemApiSrc.updateItems(updatedItem).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    this.count = 0;
  }
}
