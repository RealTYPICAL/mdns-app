// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import * as bonjourModule from "bonjour";

const bonjour = bonjourModule();

bonjour.find({ type: "music-voting" }, (service: bonjourModule.Service) => {
    console.log("Found an HTTP server: ", service);
    // const address = _.find(service.addresses, e => ip.isV4Format(e));
    // if (address) {
    //     doAction(address, service.port);
    // }
});