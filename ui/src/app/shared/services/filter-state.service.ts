import { Injectable } from '@angular/core';

export const FILTERS_MODEL = {
    users: 'users',
};

@Injectable({
    providedIn: 'root',
})
export class FilterStateService {
    saveFilters(filters: { [key: string]: any }): void {
        sessionStorage.setItem('filters', JSON.stringify(filters));
    }

    saveFilter<T>(filter: T, type: string): void {
        const filters = this.loadFilters();
        filters[type] = filter;
        this.saveFilters(filters);
    }

    loadFilter<T>(type: string): T {
        const filters = this.loadFilters();
        return filters[type] || null;
    }

    loadFilters(): { [key: string]: any } {
        const filters = sessionStorage.getItem('filters');
        return filters ? JSON.parse(filters) : {};
    }
}
