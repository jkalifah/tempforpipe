import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app-matarial/app-material.module'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
