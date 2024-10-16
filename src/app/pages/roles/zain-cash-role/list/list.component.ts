import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { AppMaterialModule } from '../../../../shared/app-matarial/app-material.module';
import { RoleService } from '@services/role.service';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from '@models/role.model';
import { MatPaginator } from '@angular/material/paginator';
import { RolesComponent } from "../../roles.component";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AppMaterialModule, RolesComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements AfterViewInit {  
  private roleService = inject(RoleService);  
  public displayedColumns: string[] = ['role_name', 'creation_date', 'created_by', 'status'];
  dataSource = new MatTableDataSource<Role>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource<Role>(this.roleService.allRoles());
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
    return 'Zain Cash Roles';
  }

  get subTitle()
  {
    return 'Add and manage roles and permissions';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
