import {HasFormater} from "../interfaces/intefase.js"

export class Invoice implements HasFormater {
    constructor(
        private client: string,
        readonly details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}