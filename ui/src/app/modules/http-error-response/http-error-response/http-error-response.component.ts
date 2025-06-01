import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'sfs-http-error-response',
    templateUrl: './http-error-response.component.html',
    styleUrls: ['./http-error-response.component.scss'],
})
export class HttpErrorResponseComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Ошибка');
    }
}
