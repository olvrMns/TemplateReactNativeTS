import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import { AcceptedAuthenticationResponse } from "../../interfaces/acceptedAuthenticationResponse.interface"; 

export class ApplicationStorage {

    public static async setAuthenticationTokens(response: AcceptedAuthenticationResponse): Promise<void> {
        await AsyncStorage.setItem(String(process.env.AUTH_TOKEN_KEY), JSON.stringify(response));
    }

    public static async getAuthenticationTokens(): Promise<AcceptedAuthenticationResponse | null> {
        let item: string | null = await AsyncStorage.getItem(String(process.env.AUTH_TOKEN_KEY));
        return item ? JSON.parse(item) : null;
    }

    public static async clearAuthenticationTokens(): Promise<void> {
        await AsyncStorage.removeItem(String(process.env.AUTH_TOKEN_KEY));
    }
}