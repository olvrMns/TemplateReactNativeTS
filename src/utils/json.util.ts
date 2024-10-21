
export class JSONUtils<T> {

    public toArray(rawJsonData: any): T[] {
        return JSON.parse(JSON.stringify(rawJsonData));
    }

    public toObject(rawJsonData: any): T {
        return JSON.parse(JSON.stringify(rawJsonData));
    } 
    
}