import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

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
