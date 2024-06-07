// Asynchronous array methods like .map(), .filter(), .reduce(),
// and .forEach() 

// .map() for asynchronous data transformation
// The map method creates a new array by applying a provided callback
// function to each element of the original array. It asynchronously
// executes the callback for each element and returns a new array.

const numbers = [1, 2, 3, 4, 5];

async function doubleNumbers() {
    return await Promise.all(numbers.map(async (num) => {
        // Simulate an asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return num * 2;
    }));
}

doubleNumbers()
    .then((res) => console.log(res)) // [ 2, 4, 6, 8, 10 ]
    .catch((err) => console.log(err));

// In this example, the map Method allows you to apply an asynchronous 
// operation on each element of the array, doubling them asynchronously.
// The Promise.all() function is used to wait for all the asynchronous
// operations to complete and return the final array of double numbers,

// .filter() filtering asynchronous data
// const products = [
//     { name: 'iPhone', stock: 5 },
//     { name: 'Samsung Galaxy', stock: 0 },
//     { name: 'Google Pixel', stock: 2 },
//     { name: 'OnePlus', stock: 3 },
// ];

// async function stockProducts(products) {
//     const filteredProds =  await Promise.all(products.filter(async (product) => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         return product.stock > 0;
//     }))
//     return filteredProds;
// }

// stockProducts(products)
//     .then((res) => console.log(res)) // not working correctly
//     .catch((err) => console.log(err));



// .forEach() performing side effects
// const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
// async function getNames(names) {
//     const namesArr = await Promise.all(names.forEach(async (name) => {
//         // Simulate an asynchronous operation
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         return name;
//     }));
//     return namesArr;
// }

// getNames(names).then((res) => console.log(res)); // not working


// Parallel execution of asynchronous operations
// const processItem = async (item) => {
//     const response = await fetch(`https://api.example.com/data/${item}`);
//     const data = await response.json();
//     return data;
// }

// const items = [1, 2, 3, 4, 5];

// const processItemsParallel = async (items) => {
//     const processedItem = await Promise.all(items.map(processItem));
//     return processedItem;
// }

// processItemsParallel(items)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// Batch Processing and Chunking
// When working with large array of data, processing all elements
// at once can put a strain on system resources and impact performance.
// To mitigate this, you can divide the array into smaller batches
// or chunks and process them sequentially or in parallel using
// asynchronous array methods. This approach helps optimize memory
// usage and prevents overwhelming the event loop. It allows for more
// efficient resource allocation and enables better utilization of system
// capabilities, resulting in improved code performance.

const processBatch = async (batch) => {
    const processedItem = await Promise.all(batch.map(async (item) => {
        // some async operation
        const result = await doAsyncTask(item);
        return result;
    }))
    return processedItem;
}

async function processArrayInBatches(array, batchSize) {
    const result = [];

    for (let i = 0; i < array.length; i += batchSize) {
        const batch = array.slice(i, i + batchSize);
        const processedItem = await processBatch(batch);
        result.push(...processedItem);
    }

    return result;
}

const data = [/* Large array of data */];
const batchSize = 100;

processArrayInBatches(data, batchSize)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })

// By dividing the large array into smaller batches, 
// we optimize memory usage and prevent overwhelming the 
// event loop with a large number of asynchronous operations.
// This approach allows for better resource allocation and 
// improves code performance, as the processing is done 
// in manageable chunks.



// Caching and memoization
const cache = new Map();

async function fetchDataFromAPI(id) {
  if (cache.has(id)) {
    return cache.get(id); // Return cached data if available
  } else {
    const data = await makeAPIRequest(id);
    cache.set(id, data); // Cache the fetched data
    return data;
  }
}

// Example: Fetching data from API for multiple IDs
async function fetchMultipleData(ids) {
  const results = [];

  for (const id of ids) {
    const data = await fetchDataFromAPI(id);
    results.push(data);
  }

  return results;
}

// Usage
const ids = [1, 2, 3, 4, 1, 2, 3, 4]; // Example array of IDs

fetchMultipleData(ids).then((data) => {
  console.log(data);
  // Output: Array of fetched data for the given IDs
});

// Caching and memoization techniques like this can significantly
// improve performance by avoiding redundant operations and 
// reducing network requests. By storing and reusing previously 
// fetched data, you can optimize code execution and enhance the 
// overall performance of your asynchronous array operations.




// Debouncing and throttling
// Asynchronous array methods, particularly those involving
// user interactions or events, can trigger frequent function calls. 
// Debouncing and throttling techniques help control the frequency of 
// these calls to optimize performance. Debouncing limits the number 
// of function invocations by delaying them until a certain period of 
// inactivity has passed. Throttling, on the other hand, restricts the 
// rate at which functions are executed by allowing them to run at 
// specific intervals. These techniques prevent excessive and unnecessary 
// function calls, reducing the strain on system resources and improving 
// overall code performance.

function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
  
  function throttle(fn, interval) {
    let lastTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      if (currentTime - lastTime >= interval) {
        fn.apply(this, args);
        lastTime = currentTime;
      }
    };
  }
  
  // Example: Debouncing and throttling an asynchronous function
  
  async function fetchData() {
    // Simulating an asynchronous operation
    console.log('Fetching data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Data fetched!');
  }
  
  const debouncedFetchData = debounce(fetchData, 500);
  const throttledFetchData = throttle(fetchData, 1000);
  
  // Example: Triggering frequent function calls
  
  // Debouncing example
  for (let i = 0; i < 5; i++) {
    debouncedFetchData();
  }
  
  // Throttling example
  for (let i = 0; i < 5; i++) {
    setTimeout(throttledFetchData, i * 500);
  }