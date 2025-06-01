import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    Output,
    forwardRef,
} from '@angular/core';
import { Constants, MaskOptions } from '@shared/constants';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';
import { FilterActivityService } from '@shared/services/filter-activity.service';

@Component({
    selector: 'sfs-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true,
        },
    ],
})
export class CustomInputComponent implements ControlValueAccessor, DoCheck {
    // Для полей ввода в качестве десятичного разделителя используем запятую, точка работает не корректно при переходе в редактирование.
    maskDecimalMarker = Constants.decimalMarker;

    @Input() label: string | null = null;
    @Input() type: string = 'text';
    @Input() formControl = new FormControl<string | number | null>(null);
    @Input() maxlength: number | null = null;
    @Input() minlength: number | null = null;
    @Input() inputRestriction: any | undefined = undefined;
    @Input() maxlengthError: string = '';
    @Input() minlengthError: string = '';
    @Input() requiredError: string = '';
    @Input() patternError: string = '';
    @Input() patternErrorDisable: boolean = false;
    @Input() maxError: string = '';
    @Input() minError: string = '';
    @Input() suffix: string | null = null;
    @Input() tooltipText: string = '';
    @Input() tooltipDisabled: boolean = true;
    @Input() showClearBtn: boolean = false;
    @Input() prefixText: string = '';
    @Output() search = new EventEmitter<void>();
    @Output() blurInput = new EventEmitter<string | number | null>();
    @Output() onClear = new EventEmitter<void>();

    // maskOptions$ - параметры для маски ввода. Для маски используется плагин https://github.com/JsDaddy/ngx-mask
    maskOptions$ = new BehaviorSubject<MaskOptions | null>(null);

    @Input() set maskOptions(options: MaskOptions | null) {
        this.maskOptions$.next(options);
    }

    constructor(
        private readonly filterActivityService: FilterActivityService,
        private readonly _cdr: ChangeDetectorRef
    ) {}

    ngDoCheck(): void {
        if (this.formControl?.invalid && this.formControl.touched) {
            this._cdr.markForCheck();
        }
    }

    searchItems(): void {
        this.search.emit();
    }

    resetControl(formControl: FormControl): void {
        this.filterActivityService.resetControl(formControl);
        this.onClear.emit();
    }

    blur(): void {
        this.blurInput.emit(this.formControl.value);
    }

    onChange: any = () => {};
    onTouched: any = () => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
        this._cdr.markForCheck();
    }

    writeValue(): void {
        this._cdr.markForCheck();
    }

    checkEmptyString() {
        if (this.formControl.value === '') {
            this.formControl.patchValue(null);
        }
    }

    isValuePresent(): boolean {
        if (typeof this.formControl.value === 'number') {
            return !!this.formControl.value || this.formControl.value === 0;
        } else {
            return !!this.formControl.value;
        }
    }
}
