import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { AppMaterialModule } from '../../../../shared/app-matarial/app-material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '@services/user.service';
import { User } from '@models/user.model';
import {ManagementComponent} from '../../management.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AppMaterialModule, ManagementComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  private userService = inject(UserService);  
  public displayedColumns: string[] = ['name', 'email', 'phone', 'role', 'status'];
  dataSource = new MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource<User>(this.userService.allUsers());
    console.log(this.dataSource);
    
  }

  applyFilter(event: Event){

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  get title()
  {
    return 'Users';
  }

  get subTitle()
  {
    return 'You can find all users added to the portal';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
