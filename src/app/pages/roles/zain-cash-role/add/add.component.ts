import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../../shared/app-matarial/app-material.module';
import { RoleService } from '@services/role.service';
import { Role } from '@models/role.model';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

}
