import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from '../../models/item.interface';
import { FilterDropDownComponent } from '../filter-drop-down/filter-drop-down.component';
import { ItemComponent } from '../item/item.component';
import { ItemApiService } from '../../services/itemApi/item-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ItemComponent, FilterDropDownComponent, MainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  itemsList!: Item[];
  typesList!: string[];
  typesChosen!: string[];
  searchValue: string = '';
  filteredList?: Item[];
  itemAPISrv = inject(ItemApiService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.itemAPISrv.getItems().subscribe({
      next: (res) => {
        this.itemsList = res;
      },
      complete: () => {
        this.typesList = this.itemsList.map((i) => i.type);
        this.typesList = [...new Set(this.typesList)];
        this.filteredList = this.itemsList;
        this.typesChosen = this.typesList;

        this.route.queryParams.subscribe((params) => {
          this.searchValue = params['search'];
          console.log(this.searchValue);
          this.getFilteredElements();
        });
      },
    });
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

  getFilteredElements(): void {
    this.filteredList = this.itemsList.filter(
      (e) =>
        this.typesChosen.includes(e.type) &&
        e.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
