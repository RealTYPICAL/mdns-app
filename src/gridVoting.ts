import { Arrow, ArrowType } from "./downvote";
import { VotingService, IEntry } from "./service";
import { address } from "ip";
import _ = require("underscore");

export class GridVoting {

    private upvote: Arrow;
    private downvote: Arrow;

    constructor(container: HTMLElement, currentVotes: IEntry<string>) {
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-voting");
        gridContainer.classList.add("grid-item");
        container.appendChild(gridContainer);

        const ip = address();

        this.upvote = new Arrow(gridContainer, ArrowType.upvote, _.contains(currentVotes.upvotes, ip));

        this.downvote = new Arrow(gridContainer, ArrowType.downvote, _.contains(currentVotes.downvotes, ip));

        this.upvote.addEventListener(event => {
            this.downvote.off();
        });

        this.downvote.addEventListener(event => {
            this.upvote.off();
        });
    }

    public addUpvoteListener(listener: (event: MouseEvent) => void): any {
        this.upvote.addEventListener(listener);
    }

    public addDownvoteListener(listener: (event: MouseEvent) => void): any {
        this.downvote.addEventListener(listener);
    }
}