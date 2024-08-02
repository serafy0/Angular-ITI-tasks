import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-drop-down',
  standalone: true,
  imports: [],
  templateUrl: './filter-drop-down.component.html',
  styleUrl: './filter-drop-down.component.css',
})
export class FilterDropDownComponent {
  dropdownOpen = false;

  @Input() typeList!: string[];
  @Input() typeListReal!: string[];
  filterChosen: string[] = [];
  @Output() sendChosenEvent = new EventEmitter<string[]>();

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log('toggle');
  }
  onCheck(event: Event) {
    let target = event.target as HTMLInputElement;

    if (target.checked) {
      this.filterChosen.push(target.value);
    } else {
      let filterId: number = this.filterChosen.findIndex(
        (f) => f == target.value
      );
      this.filterChosen.splice(filterId, 1);
    }

    console.log(this.filterChosen);
    this.sendChosenEvent.emit(this.filterChosen);
  }
  sendFilterArray() {}
}
