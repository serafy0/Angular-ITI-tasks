import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ItemApiService } from '../../services/itemApi/item-api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  itemApiService = inject(ItemApiService);
  router = inject(Router);

  onKeyUp(event: KeyboardEvent) {
    let search = (event.target as HTMLInputElement).value;
    // this.searchChange.emit(search);
    this.router.navigate([], {
      queryParams: { search },
      queryParamsHandling: 'merge',
    });
  }
}
