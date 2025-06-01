import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpErrorResponseComponent } from './http-error-response/http-error-response.component';

const routes: Routes = [
    {
        path: '',
        children: [{ path: '', component: HttpErrorResponseComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HttpErrorResponseRoutingModule {}
