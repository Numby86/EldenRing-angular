import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.scss']
})
export class ViewCardsComponent implements OnInit {

  public pagina: number = 0;
  public searchName: string = '';
  public weight: string = '';

  @Input() elementIMG?: string;
  @Input() elementNAME?: string;
  @Input() elementDES?: string;
  // @Input() listaItems?: any;


  constructor(
    
  ){}

    public ngOnInit(): void {

    }

}
