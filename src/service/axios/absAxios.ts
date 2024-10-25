import fetch, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Endpoints, EndpointsMetadata } from "./endpoints";

export interface FetchOptions {
    endpoint: Endpoints;
    body?: any;
}

export class Fetcher<T> {

    public async getOne(options: FetchOptions): Promise<T | null> {
        return await this.getResponse(options);
    }

    public async getArray(options: FetchOptions): Promise<T[] | null> {
        return await this.getResponse(options);
    }

    private async getResponse(options: FetchOptions): Promise<any> {
        console.log(process.env.ADDR_BD + EndpointsMetadata[options.endpoint].endpoint)
        let res: AxiosResponse = await fetch({
            data: options.body ? options.body : undefined,
            baseURL: process.env.ADDR_BD + EndpointsMetadata[options.endpoint].endpoint,
            method: EndpointsMetadata[options.endpoint].method
        });
        return res.data;
    }

}