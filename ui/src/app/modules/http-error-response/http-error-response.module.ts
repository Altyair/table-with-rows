import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpErrorResponseRoutingModule } from './http-error-response-routing.module';
import { HttpErrorResponseComponent } from './http-error-response/http-error-response.component';

@NgModule({
    declarations: [HttpErrorResponseComponent],
    imports: [CommonModule, HttpErrorResponseRoutingModule],
})
export class HttpErrorResponseModule {}
