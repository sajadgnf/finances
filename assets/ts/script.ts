import { Invoice } from "./classes/invoices.js"
import { Payment } from "./classes/payment.js"
import { HasFormater } from "./interfaces/intefase.js"
import { templateList } from "./classes/templateList.js"

let $ = document
const form = $.querySelector(".finance_form") as HTMLFormElement
const financeStatus = $.querySelector("#finance_status") as HTMLInputElement
const inputName = $.querySelector("#name") as HTMLInputElement
const inputDetails = $.querySelector("#details") as HTMLInputElement
const inputAmount = $.querySelector("#amount") as HTMLInputElement

// list Template
const ul = $.querySelector("ul")!
const list = new templateList(ul)
let values: [string, string, number]

// Add Finance
const addFinance = (e: Event) => {
    e.preventDefault()

    let finances: HasFormater
    values = [inputName.value, inputDetails.value, inputAmount.valueAsNumber]
   
    if (financeStatus.value == "invoice") {
        finances = new Invoice(...values)
    }
    else {
        finances = new Payment(...values)
    }
    list.render(finances, financeStatus.value)

    inputName.value = ""
    inputDetails.value = ""
    inputAmount.value = ""
}


// Events
form.addEventListener("submit", addFinance)
