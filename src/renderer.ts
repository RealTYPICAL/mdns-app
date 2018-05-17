// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { VotingService } from "./service";

const votingService = new VotingService<string>();

votingService.getCurrentVote(entries => {
    const list = document.getElementById("currentVote");
    entries.forEach(entry => {
        const li = document.createElement("li");
        const textNode = document.createTextNode(entry.url);
        li.appendChild(textNode);
        list.appendChild(li);
    });
});