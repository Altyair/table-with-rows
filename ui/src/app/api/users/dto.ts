/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class ErrorDto {
    id!: string;
    code!: string | null;
    message!: string;
    title!: string | null;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.code = _data["code"] !== undefined ? _data["code"] : <any>null;
            this.message = _data["message"] !== undefined ? _data["message"] : <any>null;
            this.title = _data["title"] !== undefined ? _data["title"] : <any>null;
        }
    }

    static fromJS(data: any): ErrorDto {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["code"] = this.code !== undefined ? this.code : <any>null;
        data["message"] = this.message !== undefined ? this.message : <any>null;
        data["title"] = this.title !== undefined ? this.title : <any>null;
        return data;
    }
}

export class SearchParametersDto {
    page!: number;
    itemsPerPage!: number | null;
    orderBy!: string | null;
    orderAsc!: boolean | null;

    init(_data?: any) {
        if (_data) {
            this.page = _data["page"] !== undefined ? _data["page"] : <any>null;
            this.itemsPerPage = _data["itemsPerPage"] !== undefined ? _data["itemsPerPage"] : <any>null;
            this.orderBy = _data["orderBy"] !== undefined ? _data["orderBy"] : <any>null;
            this.orderAsc = _data["orderAsc"] !== undefined ? _data["orderAsc"] : <any>null;
        }
    }

    static fromJS(data: any): SearchParametersDto {
        data = typeof data === 'object' ? data : {};
        let result = new SearchParametersDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["page"] = this.page !== undefined ? this.page : <any>null;
        data["itemsPerPage"] = this.itemsPerPage !== undefined ? this.itemsPerPage : <any>null;
        data["orderBy"] = this.orderBy !== undefined ? this.orderBy : <any>null;
        data["orderAsc"] = this.orderAsc !== undefined ? this.orderAsc : <any>null;
        return data;
    }
}

export class UserRegistrySearchModel {
    name!: string | null;
    searchParameters!: SearchParametersDto | null;

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"] !== undefined ? _data["name"] : <any>null;
            this.searchParameters = _data["searchParameters"] ? SearchParametersDto.fromJS(_data["searchParameters"]) : <any>null;
        }
    }

    static fromJS(data: any): UserRegistrySearchModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserRegistrySearchModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name !== undefined ? this.name : <any>null;
        data["searchParameters"] = this.searchParameters ? this.searchParameters.toJSON() : <any>null;
        return data;
    }
}

export class RegistryDtoOfUserRegistryItem {
    /** Набор элементов реестра */
    items!: UserRegistryItem[];
    /** Размер реестра */
    itemsCount!: number;

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(UserRegistryItem.fromJS(item));
            }
            else {
                this.items = <any>null;
            }
            this.itemsCount = _data["itemsCount"] !== undefined ? _data["itemsCount"] : <any>null;
        }
    }

    static fromJS(data: any): RegistryDtoOfUserRegistryItem {
        data = typeof data === 'object' ? data : {};
        let result = new RegistryDtoOfUserRegistryItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["itemsCount"] = this.itemsCount !== undefined ? this.itemsCount : <any>null;
        return data;
    }
}

export class UserRegistryItem {
    id!: string | null;
    name!: string | null;
    selected!: boolean | null;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.name = _data["name"] !== undefined ? _data["name"] : <any>null;
            this.selected = _data["selected"] !== undefined ? _data["selected"] : <any>null;
        }
    }

    static fromJS(data: any): UserRegistryItem {
        data = typeof data === 'object' ? data : {};
        let result = new UserRegistryItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["name"] = this.name !== undefined ? this.name : <any>null;
        data["selected"] = this.selected !== undefined ? this.selected : <any>null;
        return data;
    }
}
