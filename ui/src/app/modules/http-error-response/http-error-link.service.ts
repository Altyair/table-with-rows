import { Injectable } from '@angular/core';
import { FirstLevelMenuLink } from '@shared/services/navigation.service';

@Injectable()
export class HttpErrorLinkService {
    constructor() {}
    badGateway(): string[] {
        return [FirstLevelMenuLink.BadGateway];
    }
}
