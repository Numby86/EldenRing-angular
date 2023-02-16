import { PaginationComponent } from './../../shared/components/pagination/pagination.component';
import { ItemsService } from './../../core/services/items/items.service';
import { Item } from './../../core/services/items/api-itemsResponse.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items: Item[] = [];

  constructor(
    private itemsService: ItemsService
  ){ }

  public ngOnInit(): void {
    this.itemsService.getItems().subscribe((itemsFromApi) => {
      this.items = itemsFromApi;
    })

  }

  public pagina: number = 0;



  public prevPage(){
    if(this.pagina > 0){
      this.pagina -= 20;
    }
  }

  public nextPage(){
    if (this.pagina < 80) {
      this.pagina += 20;
    }
  }

}
