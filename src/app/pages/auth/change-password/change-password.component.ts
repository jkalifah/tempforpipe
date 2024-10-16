import { Component, signal } from '@angular/core';
// Angular modules
import { NgClass }             from '@angular/common';
import { NgIf }                from '@angular/common';
import { FormGroup }           from '@angular/forms';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl }         from '@angular/forms';
import { Validators }          from '@angular/forms';
import { Router }              from '@angular/router';
import { RouterLink }          from '@angular/router';
import { AppMaterialModule } from './../../../shared/app-matarial/app-material.module';
// External modules
import { TranslateModule }     from '@ngx-translate/core';

// Services
import { AppService }          from '@services/app.service';
import { StoreService }        from '@services/store.service';
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports     : [FormsModule, ReactiveFormsModule, NgClass, NgIf, RouterLink, TranslateModule,AppMaterialModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  loginForm!: FormGroup;
  pwdToogle = false;
  isLoading = false;

  public formGroup !: FormGroup<{
    password : FormControl<string>,
    confirmpassword: FormControl<string>
  }>;
  constructor
  (
    public  router       : Router,
    private storeService : StoreService,
    private appService   : AppService,
  )
  {
    this.initFormGroup();
  }
  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      password: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required, Validators.email], nonNullable: true }),
      confirmpassword: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true })
    });
  }
  hide = signal(true);

  public async onClickSubmit() : Promise<void>
  {
    await this.forgotPassword();
  }

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private async forgotPassword() : Promise<void>
  {
    this.storeService.isLoading.set(true);

    

    this.storeService.isLoading.set(false);

   
  }
}
