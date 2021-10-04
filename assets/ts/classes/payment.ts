import {HasFormater} from "../interfaces/intefase.js"

export class Payment implements HasFormater {
    constructor(
        private resepient: string,
        readonly details: string,
        public amount: number
    ) { }

    format() {
        return `${this.resepient} owed ${this.amount} for ${this.details}`
    }
}