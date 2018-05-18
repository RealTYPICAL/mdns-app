import { IEntry, VotingService } from "./service";
import { GridRow } from "./gridRow";


export class Grid {

    constructor(container: HTMLElement, entries: IEntry<string>[], votingService: VotingService<string>){
        entries.forEach(entry => {
            new GridRow(container, entry, votingService);
        });
    }

}