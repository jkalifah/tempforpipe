import { Component } from '@angular/core';
import { LayoutComponent } from "../../shared/layout/layout.component";
import { AppMaterialModule } from '../../shared/app-matarial/app-material.module'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LayoutComponent, AppMaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
