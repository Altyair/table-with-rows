import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { UserRegistryItem } from '../../../../api/users/dto';
import { Subject, takeUntil } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { UsersClient } from '../../../../api/users/clients';

enum Columns {
    Actions = 'actions',
    Name = 'name',
}

@Component({
    selector: 'sfs-registry-users-table',
    templateUrl: './registry-users-table.component.html',
    styleUrls: ['./registry-users-table.component.scss'],
})
export class RegistryUsersTableComponent implements AfterViewInit, OnDestroy {
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild('table') table!: MatTable<RegistryUsersTableComponent>;

    @Input() usersDataSource: UserRegistryItem[] = [];
    @Input() isLoading: boolean = false;

    @Output() onSortChange = new EventEmitter<any>();

    @Output() onPageSizeIncrease: EventEmitter<void> = new EventEmitter<void>();

    @Output() onSelectChange = new EventEmitter<any>();
    @Output() onAllSelectChange = new EventEmitter<any>();

    private destroy$: Subject<void> = new Subject();

    columns = Columns;
    displayedColumns: string[] = Object.values(Columns);
    public allSelected = false;

    constructor(private readonly usersClient: UsersClient, private readonly cdr: ChangeDetectorRef) {}

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngAfterViewInit(): void {
        this.sort.sortChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.onSortChange.emit(this.sort);
        });
    }

    toggleSelectAllUsers(event?: any): void {
        this.allSelected = event.checked;
        this.onAllSelectChange.emit(event.checked);
    }

    isAllSelected(): boolean {
        return !this.usersDataSource.some((user) => !user.selected);
    }

    public selectUser(event: any, id: string): void {
        this.onSelectChange.emit({ selected: event.checked, id });
    }

    onScroll(event?: any): void {
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            this.onPageSizeIncrease.emit();
        }
    }

    drop(event: CdkDragDrop<UserRegistryItem[]>) {
        moveItemInArray(this.usersDataSource, event.previousIndex, event.currentIndex);
        this.table.renderRows();
    }
}
