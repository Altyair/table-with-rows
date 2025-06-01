import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'sfs-custom-field',
    templateUrl: './custom-field.component.html',
    styleUrls: ['./custom-field.component.scss'],
})
export class CustomFieldComponent {
    private _formControl = new FormControl();
    @Input() set customControl(control: FormControl) {
        this._formControl = control;
    }
    get customControl(): FormControl {
        return this._formControl;
    }
    @Input() maxlength: number | null = null;
    @Input() minlength: number | null = null;
    @Input() maxlengthError: string = '';
    @Input() minlengthError: string = '';
    @Input() requiredError: string = '';
    @Input() patternError: string = '';
    @Input() patternErrorDisable: boolean = false;
    @Input() maxError: string = '';
    @Input() minError: string = '';
    @Input() errorListStyle: string = 'error-list';
    constructor() {}

    get errorPattern(): boolean {
        return this.customControl.errors && this.customControl.errors['pattern'];
    }
}
