import { Component, Input } from '@angular/core';
import { User } from '../../../types/usersDataType';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() userData: User = {} as User;
}
