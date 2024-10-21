export const replacementString = "?";

export class Query extends String {

    private replacementIndexes: number[] = [];

    private constructor(value: string) {
        super(value);
    };

    private setReplacementIndexes(): void {
        for (let elem = 0; elem < this.length; elem++) if (this.at(elem) == replacementString) this.replacementIndexes.push(elem); 
    }

    public static getInstance(value: string): Query {
        let query: Query = new Query(value);
        query.setReplacementIndexes();
        return query;
    }

    public complete(...values: string[]): String {
        let cloneQuery: String = this;
        let cloneReplacementIndexes: number[] = [...this.replacementIndexes];
        if (values.length == cloneReplacementIndexes.length) 
            for (let elem = 0; elem < this.replacementIndexes.length; elem++) {
                let sub: string = cloneQuery.substring(0, cloneReplacementIndexes[elem]);
                sub = sub.concat(values[elem]);
                cloneQuery = sub.concat(cloneQuery.substring(cloneReplacementIndexes[elem] + 1));
                if (elem + 1 != cloneReplacementIndexes.length) cloneReplacementIndexes[elem + 1] = cloneReplacementIndexes[elem + 1] + (values[elem].length - 1); 
            }
        return cloneQuery;
    }

}
