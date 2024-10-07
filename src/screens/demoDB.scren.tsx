import { Component, ReactNode } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { createConnection } from 'mysql2/promise';
import { Connection } from "mysql2";

export class DemoDBScreen extends Component<any, any, any> {
    
    public async testDB() {
        const connection = await createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        });
    }

    render(): ReactNode {
        return(
            <SafeAreaView>
                <Text>DEMO DB</Text>

            </SafeAreaView>
        )
    }
}