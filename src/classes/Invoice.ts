import { HasFormatter } from "../interfaces/HasFormatter.js";

//classes
class Invoice implements HasFormatter {
    readonly client: string;
    private details: string;
    private amount: number;

    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    // Same as
    // constructor(
    //     readonly client: string,
    //     private details: string,
    //     public amount: number
    // ) { }

    format() {
        return `${this.client} owes \$${this.amount} for ${this.details}.`
    }
}

export default Invoice;