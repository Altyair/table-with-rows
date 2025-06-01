import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { RegistryUsersTableComponent } from './components/registry-users-table/registry-users-table.component';
import { SharedModule } from '@shared';
import { ObserversModule } from '@angular/cdk/observers';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [UsersComponent, RegistryUsersTableComponent],
    imports: [UsersRoutingModule, SharedModule, ObserversModule, MatSort, MatSortHeader, DragDropModule],
    providers: [],
})
export class UsersModule {}
