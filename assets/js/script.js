import { Invoice } from "./classes/invoices.js";
import { Payment } from "./classes/payment.js";
import { templateList } from "./classes/templateList.js";
let $ = document;
const form = $.querySelector(".finance_form");
const financeStatus = $.querySelector("#finance_status");
const inputName = $.querySelector("#name");
const inputDetails = $.querySelector("#details");
const inputAmount = $.querySelector("#amount");
// list Template
const ul = $.querySelector("ul");
const list = new templateList(ul);
let values;
// Add Finance
const addFinance = (e) => {
    e.preventDefault();
    let finances;
    values = [inputName.value, inputDetails.value, inputAmount.valueAsNumber];
    if (financeStatus.value == "invoice") {
        finances = new Invoice(...values);
    }
    else {
        finances = new Payment(...values);
    }
    list.render(finances, financeStatus.value);
    inputName.value = "";
    inputDetails.value = "";
    inputAmount.value = "";
};
// Events
form.addEventListener("submit", addFinance);
