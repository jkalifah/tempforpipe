import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { interval, map, single, Subject, takeUntil } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AppMaterialModule } from './../../../shared/app-matarial/app-material.module'
// External modules
import { TranslateModule } from '@ngx-translate/core';

// Internal modules
import { environment } from '@env/environment';

// Services
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, RouterLink, TranslateModule, AppMaterialModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {
isLoading = false;
isClicked = false
count: number = 31;
counterText: string = '';
//clickCount$ = toObservable(this.clickCount);
destroyRef = inject(DestroyRef);

otpForm = new FormGroup({
  otp: new FormControl('', {
    validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]
  })
});
  constructor(private router: Router,
    private storeService: StoreService,
    private appService: AppService) {     

  }

  get otpIsInvalid()
  {
    return (
      this.otpForm.controls.otp.touched &&
      this.otpForm.controls.otp.dirty &&
      this.otpForm.controls.otp.invalid
    )
  }

  verify()
  {
    const otpvalue = this.otpForm.value.otp;
    console.log(otpvalue);
  }

  resendOtp()
  {
    let sub = new Subject();
    this.otpForm.reset();
    this.isClicked= true;
    const subscription = interval(1000).subscribe({
      next: () => {
        this.count = this.count - 1; 
        this.counterText = `(${this.count}s)`;  
        if(this.count == 0)         
        {
          subscription.unsubscribe();
          this.count=31;
          this.counterText = '';
        }
      }      
    }); 

    

    
  }
}
