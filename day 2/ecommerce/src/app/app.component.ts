import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemService } from './services/item.service';
import { Item } from './models/item.interface';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterDropDownComponent } from './components/filter-drop-down/filter-drop-down.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ItemComponent,
    NavbarComponent,
    FilterDropDownComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';
  itemsList!: Item[];
  typesList!: string[];
  typesChosen!: string[];
  searchValue: string = '';
  filteredList: Item[] = [];
  itemSrv = inject(ItemService);
  constructor() {
    this.itemsList = this.itemSrv.getItems();
    this.typesList = this.itemsList.map((i) => i.type);
    this.typesList = [...new Set(this.typesList)];
    this.filteredList = this.itemsList;
    this.typesChosen = this.typesList;
  }

  handleTypes(resultTypes: string[]) {
    console.log(resultTypes.length);
    if (!resultTypes.length) {
      this.typesChosen = this.typesList;
    } else {
      this.typesChosen = resultTypes;
      console.log(this.typesChosen);
    }

    this.getFilteredElements();
  }

  handleSearch(result: string) {
    console.log(result);
    this.searchValue = result;
    this.getFilteredElements();
  }

  getFilteredElements(): void {
    this.filteredList = this.itemsList.filter(
      (e) =>
        this.typesChosen.includes(e.type) &&
        e.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
