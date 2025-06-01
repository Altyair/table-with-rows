import { RouterModule, Routes } from '@angular/router';

import { FirstLevelMenuLink } from '@shared/services/navigation.service';
import { LayoutComponent } from '@core/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule),
        canActivate: [],
    },
    {
        path: FirstLevelMenuLink.BadGateway,
        component: LayoutComponent,
        loadChildren: () =>
            import('./modules/http-error-response/http-error-response.module').then((m) => m.HttpErrorResponseModule),
        canActivate: [],
    },
    {
        path: '**',
        component: LayoutComponent,
        loadChildren: () =>
            import('./modules/http-error-response/http-error-response.module').then((m) => m.HttpErrorResponseModule),
        canActivate: [],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { canceledNavigationResolution: 'computed' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
