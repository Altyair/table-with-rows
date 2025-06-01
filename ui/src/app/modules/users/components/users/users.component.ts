import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SearchParametersDto, UserRegistryItem, UserRegistrySearchModel } from '../../../../api/users/dto';
import { UsersClient } from 'src/app/api/users/clients';
import { FILTERS_MODEL, FilterStateService } from '@shared/services/filter-state.service';
import { Subject } from 'rxjs';

interface IUsersFilterForm {
    name: FormControl<string | null>;
}

@Component({
    selector: 'sfs-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [],
})
export class UsersComponent implements OnInit, OnDestroy {
    data: UserRegistryItem[] = [];
    filterForm: FormGroup<IUsersFilterForm>;
    initItemsPerPage: number = 20;
    private searchModel: UserRegistrySearchModel = new UserRegistrySearchModel();
    private searchParameters = new SearchParametersDto();
    private destroy$: Subject<void> = new Subject();
    isTableLoading: boolean;
    private maxChunks: number = 0;

    constructor(
        private readonly usersClient: UsersClient,
        private readonly cdr: ChangeDetectorRef,
        private readonly filterStateService: FilterStateService
    ) {
        this.filterForm = this.createFilterForm();
        this.isTableLoading = true;
        this.setSearchModelDefault();
    }

    private createFilterForm(): FormGroup<IUsersFilterForm> {
        return new FormGroup<IUsersFilterForm>({
            name: new FormControl<string | null>(null),
        });
    }

    setSearchModelDefault(): void {
        this.searchParameters.page = 1;
        this.searchParameters.itemsPerPage = this.initItemsPerPage;
        this.searchParameters.orderBy = 'name';
        this.searchParameters.orderAsc = true;
    }

    ngOnDestroy(): void {
        this.isTableLoading = false;
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngOnInit(): void {
        const filter = this.filterStateService.loadFilter<UserRegistrySearchModel>(FILTERS_MODEL.users);
        if (filter) {
            this.searchParameters = SearchParametersDto.fromJS(filter.searchParameters);
            this.searchParameters.page = 1;
            const values = UserRegistrySearchModel.fromJS(filter);
            this.filterForm.patchValue(values);
        }
        this.search();
    }

    onPageSizeIncrease(): void {
        this.searchParameters.page! += 1;
        if (this.searchParameters.page! <= this.maxChunks) {
            this.searchItems();
        }
    }

    search(): void {
        this.data = [];
        this.searchParameters.page = 1;
        this.searchParameters.itemsPerPage = this.initItemsPerPage;
        const formValue = this.filterForm.getRawValue();

        this.searchModel = UserRegistrySearchModel.fromJS(formValue);

        if (this.filterForm.valid) {
            this.searchItems();
        }
    }

    reset(): void {
        this.filterForm.reset(this.createFilterForm().value);
        this.search();
    }

    onClearName(): void {
        this.search();
    }

    public onSortChange(sort: any): void {
        const isAscSort = sort.direction === 'asc';
        if (sort.direction === '') {
            this.searchParameters.orderAsc = null;
            this.searchParameters.orderBy = null;
            return;
        }
        this.searchParameters.orderAsc = isAscSort;
        if (sort.active === 'name') {
            this.searchParameters.orderBy = 'name';
        } else {
            this.searchParameters.orderBy = sort.active;
        }
        this.data = [];
        this.searchParameters.page = 1;
        this.searchItems();
    }

    private searchItems(): void {
        this.isTableLoading = true;
        this.searchModel.searchParameters = this.searchParameters;
        this.filterStateService.saveFilter<UserRegistrySearchModel>(this.searchModel, FILTERS_MODEL.users);

        this.usersClient.search(this.searchModel).subscribe({
            next: (data) => {
                this.maxChunks = Math.ceil(data.itemsCount / this.initItemsPerPage);
                this.data = [...this.data, ...data.items];

                this.isTableLoading = false;
            },
            error: () => {
                this.isTableLoading = false;
            },
        });
    }
}
