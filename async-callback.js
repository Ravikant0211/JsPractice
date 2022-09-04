// Asynchronous callback:- An asynchronous callback is executed after the execution of 
// higher order function that uses callback.

// When you use a callback to continue code execution after an asynchronous operation
// the callback is called an asynchronous callback


function download(url, callback) {
    setTimeout(()=> { // to simulate the network

        // script to download the picture
        console.log(`downloading ${url}`);

        // process the picture once downloading is completed
        callback(url);
    }, 1000)
}

// function process(picture) {
//     //This code simulates the process
//     console.log(`processing ${picture}`)
// }

let url = 'https://www.javascripttutorial.net/pic.jpg';

// download(url, process);
download(url, function (picture) {
    //This code simulates the process
    console.log(`processing ${picture}`)
});