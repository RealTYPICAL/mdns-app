import { IEntry } from "./service";
import { Griditem } from "./griditem";
import { GridVoting } from "./gridVoting";


export class GridRow {

    constructor(container: HTMLElement, entry: IEntry<string>){
        new Griditem(container, entry.url);
        new Griditem(container, String(entry.score));
        new GridVoting(container);
    }
}