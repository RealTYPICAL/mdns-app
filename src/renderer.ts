// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { VotingService } from "./service";
import _ = require("underscore");

const votingService = new VotingService<string>();

function refreshEntries() {
    const list = document.getElementById("currentVote");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    votingService.getCurrentVote(entries => {
        entries.forEach(entry => {
            const name = document.createElement("div");
            name.classList.add("grid-item");
            name.innerHTML = `${entry.url}`;
            list.appendChild(name);

            const score = document.createElement("div");
            score.classList.add("grid-item");
            score.innerHTML = `${entry.score}`;
            list.appendChild(score);
            
            const gridContainer = document.createElement("div");
            gridContainer.classList.add("grid-voting");
            gridContainer.classList.add("grid-item");
            list.appendChild(gridContainer);
            
            const upvote = document.createElement("div");
            upvote.classList.add("upvote");
            gridContainer.appendChild(upvote);
            upvote.addEventListener('click', event => {
                const target = event.target as HTMLDivElement;
                target.classList.toggle('on');
            });
            
            const downvote = document.createElement("div");
            downvote.classList.add("downvote");
            gridContainer.appendChild(downvote);
            downvote.addEventListener('click', event => {
                const target = event.target as HTMLDivElement;
                target.classList.toggle('on');
            });
        });
    });
}

refreshEntries();

const button = document.getElementById("submit");
button.onclick = event => {
    const entry = _.first(document.getElementsByName("entry")) as HTMLInputElement;
    votingService.submitEntry(entry.value, refreshEntries);
    entry.value = "";
};
