import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FormButtonsComponent } from '@shared/components/form-buttons/form-buttons.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomFieldComponent } from './components/form/custom-field/custom-field.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

const reExports = [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
];

const declarationsForExport = [FormButtonsComponent, CustomInputComponent, CustomFieldComponent];

@NgModule({
    exports: [...reExports, ...declarationsForExport],
    declarations: [...declarationsForExport],
    imports: [...reExports, NgxMaskDirective, NgxMaskPipe],
    providers: [provideNgxMask()],
})
export class SharedModule {}
