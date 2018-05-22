

export enum ArrowType {
    upvote = 'upvote',
    downvote = 'downvote'
}

export class Arrow {

    private readonly downvote: HTMLDivElement;

    constructor(container: HTMLElement, arrow: string, isOn: boolean) {
        this.downvote = document.createElement("div");
        this.downvote.classList.add(arrow);
        if(isOn) {
            this.downvote.classList.add('on');
        }
        container.appendChild(this.downvote);
        this.downvote.addEventListener('click', event => {
            const target = event.target as HTMLDivElement;
            target.classList.toggle('on');
        });
    }

    public addEventListener(listener: (event: MouseEvent) => void): void {
        this.downvote.addEventListener('click', listener);
    }

    public off(): void {
        this.downvote.classList.remove('on');
    }
}