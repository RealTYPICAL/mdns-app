import * as request from "request";
import * as bonjourModule from "bonjour";
import * as _ from "underscore";
import * as ip from "ip";
const bonjour = bonjourModule();

export interface IEntry<T> {
    score: number;
    currentVotes: string[];
    url: T;
    id: number;
}

export interface Vote {
    id: number;
    isUpvote: boolean;
}

export class VotingService<T> {

    private votingURL: Promise<string>;

    constructor() {
        this.votingURL = new Promise<string>(resolve => {
            bonjour.find({ type: "music-voting" }, (service: bonjourModule.Service) => {
                console.log("Found an HTTP server: ", service);
                const address = _.find(service.addresses, e => ip.isV4Format(e));
                resolve(`http://${address}:${service.port}`);
            });
        });
    }

    getCurrentVote(callback: (values: IEntry<T>[]) => void): void {
        this.votingURL.then(url => {
            request(`${url}/getCurrentVote`, (error: any, response: request.RequestResponse, body: any) => {
                callback(JSON.parse(body));
            });
        });
    }
    submitEntry(submission: T, callback: () => void, ): void {
        this.votingURL.then(url => {
            request.post(`${url}/submitEntry`, { json: { "entry": submission } }, () => {
                callback();
            });
        });
    }
    submitVote(vote: Vote, callback: () => void): void {
        this.votingURL.then(url => {
            request.post(`${url}/submitVote`, { json: vote }, () => {
                callback();
            });
        });
    }
}
