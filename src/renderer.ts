// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { VotingService } from "./service";
import _ = require("underscore");
import { Griditem } from "./griditem";
import { GridVoting } from "./gridVoting";
import { GridRow } from "./gridRow";
import { Grid } from "./grid";

const votingService = new VotingService<string>();

function refreshEntries() {
    const list = document.getElementById("currentVote");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    votingService.getCurrentVote(entries => {
        new Grid(list, entries);
    });
}

refreshEntries();

const button = document.getElementById("submit");
button.onclick = event => {
    const entry = _.first(document.getElementsByName("entry")) as HTMLInputElement;
    votingService.submitEntry(entry.value, refreshEntries);
    entry.value = "";
};
