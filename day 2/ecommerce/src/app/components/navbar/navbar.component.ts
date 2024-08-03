import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() searchChange = new EventEmitter<string>();

  onKeyUp(event: KeyboardEvent) {
    let search = (event.target as HTMLInputElement).value;
    this.searchChange.emit(search);
  }
}
