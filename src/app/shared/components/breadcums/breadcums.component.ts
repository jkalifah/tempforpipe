import { Component, inject } from '@angular/core';
import { BreadcumsService } from '../../services/breadcums.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcums.component.html',
  styleUrl: './breadcums.component.scss'
})
export class BreadcumsComponent {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private breadcrumbService: BreadcumsService) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
  }

}
