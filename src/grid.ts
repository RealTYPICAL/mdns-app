import { IEntry } from "./service";
import { GridRow } from "./gridRow";


export class Grid {

    constructor(container: HTMLElement, entries: IEntry<string>[]){
        entries.forEach(entry => {
            new GridRow(container, entry);
        });
    }

}