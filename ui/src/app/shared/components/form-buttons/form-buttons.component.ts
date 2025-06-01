import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sfs-form-buttons',
    templateUrl: './form-buttons.component.html',
    styleUrls: ['./form-buttons.component.scss'],
})
export class FormButtonsComponent {
    @Input() mainButtonDisabled = false;
    @Input() secondaryButtonDisabled = false;
    @Input() mainButtonText = 'Поиск';
    @Input() secondaryButtonText = 'Очистить';
    @Input() mainButtonDisabledTooltip = 'Некорректные критерии поиска';
    @Input() secondaryButtonDisabledTooltip = 'Действие невозможно';
    @Output() mainClick = new EventEmitter<void>();
    @Output() secondaryClick = new EventEmitter<void>();

    onMainClick(): void {
        this.mainClick.emit();
    }

    onSecondaryClick(): void {
        this.secondaryClick.emit();
    }
}
