// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { VotingService } from "./service";
import _ = require("underscore");

const votingService = new VotingService<string>();

function refreshEntries() {
    const list = document.getElementById("currentVote") as HTMLUListElement;
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    votingService.getCurrentVote(entries => {
        entries.forEach(entry => {
            const li = document.createElement("li");
            const textNode = document.createTextNode(`Entry:${entry.url} Vote:${entry.score}`);
            li.appendChild(textNode);
            list.appendChild(li);
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

for (const btn of document.querySelectorAll('.upvote')) {
    btn.addEventListener('click', event => {
        const target = event.target as HTMLSpanElement;
        target.classList.toggle('on');
    });
}

for (const btn of document.querySelectorAll('.downvote')) {
    btn.addEventListener('click', event => {
        const target = event.target as HTMLSpanElement;
        target.classList.toggle('on');
    });
}