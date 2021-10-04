import { HasFormater } from "../interfaces/intefase.js"

export class templateList {
    constructor(private container: HTMLUListElement) { }

    render(item: HasFormater, header: string) {
        const template = `<li class="finance_item">
          <h2 class="finance_item_header">${header}</h2>
          <p class="lead">${item.format()}</p>
          <span class="trash"><i class="bi bi-trash"></i></span>
        </li>`
        this.container.insertAdjacentHTML("beforeend", template)
    }
}