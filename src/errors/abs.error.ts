export class APIError extends Error {

    public constructor(message: string) {
        super(message);
    }

    public static otherError() {
        return new this("Something unexptected happened during the authentication process!");
    }

    public static debugError() {
        return new this("Unexpected.....................");
    }
}