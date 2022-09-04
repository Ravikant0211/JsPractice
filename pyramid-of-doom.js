// Nesting callbacks and pyramid of Doom
//=> Nesting many Asynchronous function inside a callback is known as pyramid of Doom or callback hell.
// To avoid pyramid of Doom, we use Promise() or Async/ Await functions.

// Pyramid of Doom
// ====================================================
// asyncFunction(function(){
//     asyncFunction(function(){
//         asyncFunction(function(){
//             asyncFunction(function(){
//                 asyncFunction(function(){
//                     ....
//                 });
//             });
//         });
//     });
// });
//=====================================================

//how do you download three pictures and process them sequentially? A typical approach is to call the download() function inside the callback function, like this:

function download(url, callback) {
    setTimeout(() => {
      console.log(`Downloading ${url} ...`);
      callback(url);
    }, 1000);
  }
  
  const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
  const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
  const url3 = 'https://www.javascripttutorial.net/pic3.jpg';
  
  download(url1, function (url) {
    console.log(`Processing ${url}`);
    download(url2, function (url) {
      console.log(`Processing ${url}`);
      download(url3, function (url) {
        console.log(`Processing ${url}`);
      });
    });
  });

  // Output:
  //==============================================
//   Downloading https://www.javascripttutorial.net/pic1.jpg ...
// Processing https://www.javascripttutorial.net/pic1.jpg
// Downloading https://www.javascripttutorial.net/pic2.jpg ...
// Processing https://www.javascripttutorial.net/pic2.jpg
// Downloading https://www.javascripttutorial.net/pic3.jpg ...
// Processing https://www.javascripttutorial.net/pic3.jpg
