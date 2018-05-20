import { IEntry, VotingService } from "./service";
import { GridRow } from "./gridRow";


export class Grid {

    constructor(container: HTMLElement, entries: IEntry<string>[], votingService: VotingService<string>, refresh: () => void){
        entries.forEach(entry => {
            new GridRow(container, entry, votingService, refresh);
        });
    }

}