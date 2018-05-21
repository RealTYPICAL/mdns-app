import { VotingService } from "./service";
import { Grid } from "./grid";


export class CurrentVote {

    private votingService: VotingService<string>;

    constructor(votingService: VotingService<string>) {
        this.votingService = votingService;
    }

    public refreshEntries(): void {
        const currentVote = document.getElementById("currentVote");
        while (currentVote.firstChild) {
            currentVote.removeChild(currentVote.firstChild);
        }

        this.votingService.getCurrentVote(entries => {
            new Grid(currentVote, entries, this.votingService, () => this.refreshEntries());
        });
    }
}