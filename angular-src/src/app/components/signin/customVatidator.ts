import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static confirmEmail( control: AbstractControl, otherController: AbstractControl ): ValidationErrors | null {
        if ((control.value) !== (otherController.value)) {
            return { confirmEmail: true};
        } else {
            return null;
        }
    }
}
