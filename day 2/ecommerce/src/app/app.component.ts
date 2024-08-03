import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from './components/item/item.component';
import { ItemService } from './services/item.service';
import { Item } from './models/item.interface';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterDropDownComponent } from './components/filter-drop-down/filter-drop-down.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ItemComponent,
    NavbarComponent,
    FilterDropDownComponent,
    FooterComponent,
    MainComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';
  searchValue: string = '';

  handleSearch(result: string) {
    console.log(result);
    this.searchValue = result;
    console.log('sending', result);
  }
}
