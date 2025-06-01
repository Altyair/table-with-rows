import { Observable, from, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { HttpErrorLinkService } from '../modules/http-error-response/http-error-link.service';
import { Router } from '@angular/router';
import { SnackBarService } from '@shared/components/snack-bar/snack-bar.service';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

enum ResponseStatus {
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
    GatewayTimeout = 504,
}

export interface IValidationMessage {
    errorType: string;
    validationLevel: string;
    message: string | undefined;
    value: number;
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private readonly router: Router,
        private readonly httpErrorLinkService: HttpErrorLinkService,
        private readonly snackBarService: SnackBarService,
        private readonly dialog: MatDialog
    ) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(request)
            .pipe(catchError((errorResponse) => this.handleBlobError(errorResponse)))
            .pipe(catchError((errorResponse) => this.handleError(errorResponse)));
    }

    private handleBlobError(errorResponse: HttpErrorResponse): Observable<any> {
        if (
            errorResponse instanceof HttpErrorResponse &&
            errorResponse.error instanceof Blob &&
            errorResponse.error.type.indexOf('application/json') !== -1
        ) {
            // https://github.com/angular/angular/issues/19888
            // When request of type Blob, the error is also in Blob instead of object of the json data
            return from(
                new Promise<any>((_, reject) => {
                    const reader = new FileReader();
                    reader.onload = (event: Event) => {
                        try {
                            reject(
                                new HttpErrorResponse({
                                    error: JSON.parse((event.target as any).result),
                                    headers: errorResponse.headers,
                                    status: errorResponse.status,
                                    statusText: errorResponse.statusText,
                                    url: errorResponse.url as string,
                                })
                            );
                        } catch (e) {
                            reject(errorResponse);
                        }
                    };
                    reader.onerror = () => {
                        reject(errorResponse);
                    };
                    reader.readAsText(errorResponse.error);
                })
            );
        }
        return throwError(() => errorResponse);
    }

    private handleError(errorResponse: HttpErrorResponse): Observable<never> {
        if (errorResponse.status === ResponseStatus.Unauthorized) {
            return throwError(() => errorResponse.error);
        }
        if (errorResponse.status === ResponseStatus.Forbidden || errorResponse.status === ResponseStatus.NotFound) {
            this.dialog.closeAll();
            this.router.navigate(this.httpErrorLinkService.badGateway());
            return throwError(() => errorResponse.error);
        }
        if (errorResponse.status === ResponseStatus.GatewayTimeout) {
            return throwError(() => errorResponse.error);
        }
        if (errorResponse.status >= ResponseStatus.InternalServerError) {
            if (errorResponse.error.id) {
                this.snackBarService.unexpectedError('ID ошибки: ' + errorResponse.error.id);
            } else {
                this.snackBarService.unexpectedError('Код ошибки: ' + errorResponse.status.toString());
            }
        }

        return throwError(() => errorResponse.error);
    }
}
