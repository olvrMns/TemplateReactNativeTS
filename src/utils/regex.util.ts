import { FormatError } from "../errors/format.error";

export const RegexCode: {[field: string]: RegExp} = {
    USERNAME: /^([a-zA-Z0-9_]){1,30}$/g,
    FIRST_LAST_NAME: /^([a-zA-Z]){1,15}((-|\\s)[a-zA-Z]{1,15}){0,2}$/g,
    PWD: /(?=.*[0-9]{1,})(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*\W{1,}).{8,}/g,
    URL: /(https?:\/\/)?(www\.)?(?=[a-zA-Z0-9]{1,256}\.)[a-zA-Z0-9]+(\.[a-z]{2,5}){1,3}(\/[a-zA-Z0-9-\._~:\/?#\[\]@!$&'\(\)\*\\+,;=]*)?/g,
    EMAIL: /^(?=.{1,64}@)[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]+)*@[a-z]+(\.[a-zA-Z]+)+[a-zA-Z]$/g,
    PHONE_NUMBER: /^\d{3}-\d{3}-\d{4}$/g,
    LIMIT80: /^.{0,80}$/g,
    LIMIT5000: /^.{0,5000}$/g,
    LIMIT50: /^.{0,50}/g,
    POSITIVE_DECIMAL: /^\d+(\.?\d+){1}$/g
}

export class RegexUtils {


    public static verify(value: string, code: RegExp): boolean {
        return new RegExp(code).test(value);
    }

    public static testEmail(value: string): string {
        if (this.verify(value, RegexCode.EMAIL)) return value;
        else throw FormatError.emailFormatError();
    }

    public static testUsername(value: string): string {
        if (this.verify(value, RegexCode.USERNAME)) return value;
        else throw FormatError.usernameFormatError();
    }

    public static testPassword(value: string): string {
        if (this.verify(value, RegexCode.PWD)) return value;
        else throw FormatError.passwordFormatError();
    }

    public static testFirstLastName(value: string): string {
        if (this.verify(value, RegexCode.FIRST_LAST_NAME)) return value;
        else throw FormatError.firstLastNameFormatError();
    }

    public static testPositiveDecimal(value: string, attributeName: string): string {
        if (this.verify(value, RegexCode.POSITIVE_DECIMAL)) return value;
        else throw FormatError.positiveNumberError(attributeName);
    }

}