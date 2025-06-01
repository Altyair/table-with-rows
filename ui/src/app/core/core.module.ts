import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { HttpErrorLinkService } from '../modules/http-error-response/http-error-link.service';
import { ErrorInterceptor } from './error-interceptor';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/menu/menu.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { GlobalErrorHandler } from './global-error-handling-service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
    exports: [LayoutComponent],
    declarations: [LayoutComponent, MenuComponent],
    imports: [SharedModule, MatIconModule, MatDialogModule],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru-RU' },
        HttpErrorLinkService,
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            deps: [Router, HttpErrorLinkService, MatDialog],
            multi: true,
        },
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
