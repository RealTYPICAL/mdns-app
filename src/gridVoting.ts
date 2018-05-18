import { Upvote } from "./upvote";
import { Downvote } from "./downvote";


export class GridVoting{
    private upvote: Upvote;
    private downvote: Downvote;

    constructor(container: HTMLElement) {
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-voting");
        gridContainer.classList.add("grid-item");
        container.appendChild(gridContainer);

        this.upvote = new Upvote(gridContainer);
        
        this.downvote = new Downvote(gridContainer);
    }
}