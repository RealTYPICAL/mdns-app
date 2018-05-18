import { IEntry, VotingService } from "./service";
import { Griditem } from "./griditem";
import { GridVoting } from "./gridVoting";


export class GridRow {

    constructor(container: HTMLElement, entry: IEntry<string>, votingService: VotingService<string>){
        new Griditem(container, entry.url);
        new Griditem(container, String(entry.score));
        const voting = new GridVoting(container);
        
        voting.addUpvoteListener(event => {
            votingService.submitVote( { id: entry.id, isUpvote: true}, () => {
                //Refresh here.
            });
        });

        voting.addDownvoteListener(event => {
            votingService.submitVote( { id: entry.id, isUpvote: false}, () => {
                //Refresh here.
            });
        });
    }
}