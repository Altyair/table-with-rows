import { NavigationService } from '@shared/services/navigation.service';
import { Component, OnInit } from '@angular/core';

export interface MenuItem {
    name: string;
    url: string[];
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss', '../../../../scss/menu.scss'],
})
export class MenuComponent implements OnInit {
    menuItems: MenuItem[] = [];

    constructor(public readonly navigationService: NavigationService) {}

    ngOnInit(): void {
        this.menuItems = [
            {
                name: 'Пользователи',
                url: this.navigationService.rootLink(),
            },
        ];
    }
}
