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
  // @Input() typeListReal!: string[];
  filterChosen: string[] = [];
  @Output() sendChosenEvent = new EventEmitter<string[]>();
  allChecked: boolean = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log('toggle');
  }
  onCheck(event: Event) {
    console.log(event);
    if (this.allChecked) {
      return;
    }
    let target = event.target as HTMLInputElement;

    if (target.checked) {
      this.filterChosen.push(target.value);
      // }
    } else {
      let filterId: number = this.filterChosen.findIndex(
        (f) => f == target.value
      );
      this.filterChosen.splice(filterId, 1);
    }
    this.sendChosenEvent.emit(this.filterChosen);

    console.log(this.filterChosen);
  }
  checkAll(event: Event) {
    let target = event.target as HTMLInputElement;
    if (target.checked) {
      console.log(this.typeList);
      this.sendChosenEvent.emit(this.typeList);
      this.allChecked = true;
    } else {
      this.allChecked = false;
    }
  }
}
