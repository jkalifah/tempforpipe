import { Component } from '@angular/core';
import { RouterOutlet }         from '@angular/router';
import { LayoutComponent } from "../../shared/layout/layout.component";

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {

}
