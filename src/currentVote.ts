import { VotingService } from "./service";
import { Grid } from "./grid";


export class CurrentVote {

    private votingService: VotingService<string>;

    constructor(votingService: VotingService<string>) {
        this.votingService = votingService;
        console.log("woeifjoiwejf: " + votingService);
    }

    public refreshEntries(): void {
        console.log("next due: " + this.votingService);
        const currentVote = document.getElementById("currentVote");
        while (currentVote.firstChild) {
            currentVote.removeChild(currentVote.firstChild);
        }

        this.votingService.getCurrentVote(entries => {
            new Grid(currentVote, entries, this.votingService);
        });
    }
}