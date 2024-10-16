import { Component } from '@angular/core';
import { routes } from 'src/app/app.routes';
import { AppMaterialModule } from '../app-matarial/app-material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppMaterialModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public routes: typeof routes = routes;
  public isOpenUiElements = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

}
