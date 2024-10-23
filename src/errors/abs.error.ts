export class APIError extends Error {

    public constructor(message: string) {
        super(message);
    }

    public static debugError() {
        return new this("Unexpected.....................");
    }
}