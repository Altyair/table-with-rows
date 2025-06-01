import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FilterActivityService {
    public resetControl(formControl: FormControl): void {
        formControl.reset();
    }
}
