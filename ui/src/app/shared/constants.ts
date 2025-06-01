import { IConfig as ConfigNgxMask } from 'ngx-mask';

export interface MaskOptions {
    mask: string;
    allowNegativeNumbers?: ConfigNgxMask['allowNegativeNumbers'];
    separatorLimit?: ConfigNgxMask['separatorLimit'];
}

export class Constants {
    // Для полей ввода в качетве десятичного разделителя используем запятую, точка работает не корректно при переходе в редактирование.
    public static decimalMarker = ',' as ConfigNgxMask['decimalMarker'];
}
