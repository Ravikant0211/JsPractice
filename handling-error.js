// Handling errors
// The following code introduces two callbacks: success and failure to handle the success and failure cases respectively:
function download(url, success, failure) {
    setTimeout(()=> { 
        console.log(`Downloading the picture from ${url} ....`);
        url ? success(url) : failure(url);
    }, 1000)
}


let url = 'https://www.javascripttutorial.net/pic.jpg';


download(
    '',
    (url) => console.log(`processing ${url}`),
    (url) => console.log(`The ${url} is not valid`)
);