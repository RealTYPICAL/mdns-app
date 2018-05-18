import { Arrow, ArrowType } from "./downvote";
import { VotingService } from "./service";

export class GridVoting {
    
    private upvote: Arrow;
    private downvote: Arrow;
    
    constructor(container: HTMLElement) {
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-voting");
        gridContainer.classList.add("grid-item");
        container.appendChild(gridContainer);
        
        this.upvote = new Arrow(gridContainer, ArrowType.upvote);
        
        this.downvote = new Arrow(gridContainer, ArrowType.downvote);
        
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