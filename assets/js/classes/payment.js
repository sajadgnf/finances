export class Payment {
    constructor(resepient, details, amount) {
        this.resepient = resepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.resepient} owed ${this.amount} for ${this.details}`;
    }
}
