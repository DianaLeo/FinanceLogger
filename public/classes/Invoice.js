//classes
class Invoice {
    constructor(c, d, a) {
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
        return `${this.client} owes \$${this.amount} for ${this.details}.`;
    }
}
export default Invoice;
