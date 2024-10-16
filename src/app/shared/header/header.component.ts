import { Component } from '@angular/core';
import { AppMaterialModule } from '../app-matarial/app-material.module';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { LogoComponent } from "../components/logo/logo.component";
import { BreadcumsComponent } from "../components/breadcums/breadcums.component";
import { UserComponent } from "../components/user/user.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppMaterialModule, RouterLink, LogoComponent, BreadcumsComponent, UserComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
