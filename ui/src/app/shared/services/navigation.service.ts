import { Injectable } from '@angular/core';

export enum FirstLevelMenuLink {
    Users = 'users',
    BadGateway = 'bad-gateway-page',
}

const slash = '/';

export const ROOT_PAGE_TITLE = 'Список пользователей';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor() {}

    rootLink(): string[] {
        return [slash];
    }

    usersLink(): string[] {
        return [slash.concat(FirstLevelMenuLink.Users)];
    }
    badGatewayLink(): string[] {
        return [slash.concat(FirstLevelMenuLink.BadGateway)];
    }
    badGatewayLinkWithSlash(): string {
        return slash.concat(FirstLevelMenuLink.BadGateway);
    }
}
