import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemService } from './services/item.service';
import { Item } from './models/item.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';
  itemsList!: Item[];

  itemSrv = inject(ItemService);
  constructor() {
    this.itemsList = this.itemSrv.getItems();
  }
}
