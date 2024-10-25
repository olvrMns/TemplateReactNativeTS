import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import { AcceptedAuthenticationResponse } from "../axios/authResponses";

export class ApplicationStorage {

    public static async setAuthenticationToken(response: AcceptedAuthenticationResponse): Promise<void> {
        await AsyncStorage.setItem(String(process.env.AUTH_TOKEN_KEY), JSON.stringify(response));
    }

    public static async getAuthenticationToken(): Promise<AcceptedAuthenticationResponse | null> {
        let item: string | null = await AsyncStorage.getItem(String(process.env.AUTH_TOKEN_KEY));
        return item ? JSON.parse(item) : null;
    }

    public static async reset(): Promise<void> {
        await AsyncStorage.removeItem(String(process.env.AUTH_TOKEN_KEY));
    }
}