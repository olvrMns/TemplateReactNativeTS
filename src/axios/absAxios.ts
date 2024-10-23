import fetch, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Endpoints } from "./endpoints";

export interface FetchOptions {
    endpoint: Endpoints;
    body?: any;
    method: "post" | "get" | "put" | "patch"
}

export class Fetcher<T> {

    public async getOne(options: FetchOptions): Promise<T | null> {
        return await this.getResponse(options);
    }

    public async getArray(options: FetchOptions): Promise<T[] | null> {
        return await this.getResponse(options);
    }

    private async getResponse(options: FetchOptions): Promise<any> {
        try {
            let res: AxiosResponse = await fetch({
                data: options.body ? options.body : undefined,
                baseURL: process.env.DATA_URL + options.endpoint,
                method: options.method
            });
            return res.data;
        } catch (err: unknown) {
            console.log(err)
            return null;
        }
    }

}