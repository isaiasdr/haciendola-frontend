import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);

  private validatePasswordMatch( field1: string, field2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(field1)?.value || '';
      const fieldValue2 = formGroup.get(field2)?.value || '';

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }

  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstname: ['', [Validators.required, Validators.minLength(6)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(2)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [
      this.validatePasswordMatch('password', 'confirmPassword')
    ]
  })


  public register() {
    if ( this.registerForm.errors ) return;

  }
}
