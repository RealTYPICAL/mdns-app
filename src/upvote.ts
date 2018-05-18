

export class Upvote {

    constructor(container: HTMLElement){
        const upvote = document.createElement("div");
        upvote.classList.add("upvote");
        container.appendChild(upvote);
        upvote.addEventListener('click', event => {
            const target = event.target as HTMLDivElement;
            target.classList.toggle('on');
        });
    }
}