import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf, of } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import { ErrorDto, UserRegistrySearchModel, RegistryDtoOfUserRegistryItem } from './dto';

export const SERVER_BASE_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root',
})
export class UsersClient {
    private http: HttpClient;
    private readonly baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient) {
        this.http = http;
        this.baseUrl = SERVER_BASE_URL;
    }

    /**
     * Получить список пользователей.
     * @param searchModel (optional) Поисковая модель.
     * @return Возвращает список пользователей.
     */
    search(searchModel?: UserRegistrySearchModel | undefined): Observable<RegistryDtoOfUserRegistryItem> {
        let url_ = this.baseUrl + '/api/users/search';
        url_ = url_.replace(/[?&]$/, '');

        const content_ = JSON.stringify(searchModel);

        const options_: any = {
            body: content_,
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
        };

        return this.http
            .request('post', url_, options_)
            .pipe(
                _observableMergeMap((response_: any) => {
                    return this.processSearch(response_);
                })
            )
            .pipe(
                _observableCatch((response_: any) => {
                    if (response_ instanceof HttpResponseBase) {
                        try {
                            return this.processSearch(response_ as any);
                        } catch (e) {
                            return _observableThrow(e) as any as Observable<RegistryDtoOfUserRegistryItem>;
                        }
                    } else {
                        return _observableThrow(response_) as any as Observable<RegistryDtoOfUserRegistryItem>;
                    }
                })
            );
    }

    protected processSearch(response: HttpResponseBase): Observable<RegistryDtoOfUserRegistryItem> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse
                ? response.body
                : (response as any).error instanceof Blob
                ? (response as any).error
                : undefined;

        const _headers: any = {};
        if (response.headers) {
            for (const key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(
                _observableMergeMap((_responseText: string) => {
                    let result200: any = null;
                    const resultData200 =
                        _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    result200 = RegistryDtoOfUserRegistryItem.fromJS(resultData200);
                    return _observableOf(result200);
                })
            );
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(
                _observableMergeMap((_responseText: string) => {
                    let result401: any = null;
                    const resultData401 =
                        _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    result401 = ErrorDto.fromJS(resultData401);
                    return throwException(
                        '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e.',
                        status,
                        _responseText,
                        _headers,
                        result401
                    );
                })
            );
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(
                _observableMergeMap((_responseText: string) => {
                    return throwException('An unexpected server error occurred.', status, _responseText, _headers);
                })
            );
        }
        return _observableOf(null as any);
    }

    /**
     * Пометить элемент как выбранный в списке.
     * @param selected.
     * @param id.
     * @return Возвращает булево значение.
     */
    select(selected: boolean, id: number): Observable<boolean> {
        let url_ = this.baseUrl + '/api/users/select';
        url_ = url_.replace(/[?&]$/, '');

        const content_ = JSON.stringify({ selected, id });

        const options_: any = {
            body: content_,
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
        };

        return this.http
            .request('post', url_, options_)
            .pipe(
                _observableMergeMap((response_: any) => {
                    return this.processSelect(response_);
                })
            )
            .pipe(
                _observableCatch((response_: any) => {
                    if (response_ instanceof HttpResponseBase) {
                        try {
                            return this.processSelect(response_ as any);
                        } catch (e) {
                            return _observableThrow(e) as any as Observable<boolean>;
                        }
                    } else {
                        return _observableThrow(response_) as any as Observable<boolean>;
                    }
                })
            );
    }

    /**
     * Пометить все записи как выбранные в списке.
     * @param selected.
     * @return Возвращает булево значение.
     */
    allSelect(selected: boolean): Observable<boolean> {
        let url_ = this.baseUrl + '/api/users/all-select';
        url_ = url_.replace(/[?&]$/, '');

        const content_ = JSON.stringify({ selected });

        const options_: any = {
            body: content_,
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
        };

        return this.http
            .request('post', url_, options_)
            .pipe(
                _observableMergeMap((response_: any) => {
                    return this.processSelect(response_);
                })
            )
            .pipe(
                _observableCatch((response_: any) => {
                    if (response_ instanceof HttpResponseBase) {
                        try {
                            return this.processSelect(response_ as any);
                        } catch (e) {
                            return _observableThrow(e) as any as Observable<boolean>;
                        }
                    } else {
                        return _observableThrow(response_) as any as Observable<boolean>;
                    }
                })
            );
    }

    protected processSelect(response: HttpResponseBase): Observable<boolean> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse
                ? response.body
                : (response as any).error instanceof Blob
                ? (response as any).error
                : undefined;

        const _headers: any = {};
        if (response.headers) {
            for (const key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(
                _observableMergeMap((_responseText: string) => {
                    let result200: any = null;
                    const resultData200 =
                        _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    result200 = resultData200 !== undefined ? resultData200 : <any>null;

                    return _observableOf(result200);
                })
            );
        } else if (status === 401) {
            return blobToText(responseBlob).pipe(
                _observableMergeMap((_responseText: string) => {
                    let result401: any = null;
                    const resultData401 =
                        _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    result401 = ErrorDto.fromJS(resultData401);
                    return throwException(
                        '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e.',
                        status,
                        _responseText,
                        _headers,
                        result401
                    );
                })
            );
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(
                _observableMergeMap((_responseText: string) => {
                    return throwException('An unexpected server error occurred.', status, _responseText, _headers);
                })
            );
        }
        return _observableOf(null as any);
    }
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result?: any
): Observable<any> {
    return _observableThrow(new ApiException(message, status, response, headers, result));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next('');
            observer.complete();
        } else {
            const reader = new FileReader();
            reader.onload = (event) => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}
