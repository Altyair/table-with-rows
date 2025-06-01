import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
    constructor(private readonly toastr: ToastrService) {}

    success = (message: string, submessage?: string) => this.toastr.success(this.messageTemplate(message, submessage));
    warning = (message: string, submessage?: string) => this.toastr.warning(this.messageTemplate(message, submessage));
    error = (message: string, submessage?: string) => this.toastr.error(this.messageTemplate(message, submessage));

    unexpectedError(submessage?: string): void {
        this.error('Произошла непредвиденная ошибка', submessage);
    }

    private messageTemplate(message: string, submessage?: string) {
        if (!submessage) {
            return `<div class="toast-text-message">${message}</div>`;
        }

        return `<div class="toast-text-message">${message}</div> <div class="toast-text-submessage">${submessage}</div>`;
    }
}
