

export class Downvote{

    constructor(container: HTMLElement){
        const downvote = document.createElement("div");
        downvote.classList.add("downvote");
        container.appendChild(downvote);
        downvote.addEventListener('click', event => {
            const target = event.target as HTMLDivElement;
            target.classList.toggle('on');
        });
    }
}