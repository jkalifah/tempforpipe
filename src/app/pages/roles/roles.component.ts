import { Component } from '@angular/core';
import { RouterOutlet }         from '@angular/router';
import { LayoutComponent } from "../../shared/layout/layout.component";

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {

}
