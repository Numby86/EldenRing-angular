import { Component } from '@angular/core';
import { charactersCreated } from 'src/app/core/services/crateCharacter/character.data';
import { clase } from 'src/app/core/services/crateCharacter/clase.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public clases = clase;

  public users = charactersCreated;

}
