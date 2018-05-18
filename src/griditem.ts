
export class Griditem {

    constructor(container: HTMLElement, text: string){
        const name = document.createElement("div");
        name.classList.add("grid-item");
        name.innerHTML = text;
        container.appendChild(name);
    }    
}