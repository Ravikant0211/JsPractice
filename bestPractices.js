// const numbers = [1,2 ,3 , 4, 5, 6, 7, 8, 9, 10];
// const squaredOddNumbers = numbers.flatMap((num) => {
//     return num % 2 !== 0 ? [num * num]: [num];
// });
// console.log(squaredOddNumbers);

// Order of array methods
// const numbers = [9, 3, 6, 4, 8, 1, 2, 5, 7];
// const arr = numbers.filter((num) => num % 2 !== 0).sort((a, b) => b - a).map((num) => num ** 3);
// console.log(arr);

// using js classes 
function constructURL(category, limit, userId) {
    const baseURL = "https://fakestoreapi.com/products";
    const url = new URL(baseURL);
    const params = new URLSearchParams();
  
    if (category) url.pathname += `/category/${category}`;
    if (limit) params.append('limit', Number(limit).toString());
    if (userId) params.append('userId', Number(userId).toString());
  
    url.search = params.toString();
    return url.toString();
  }
  
  const constructedUrl = constructURL('books', 100, 123);
  console.log(constructedUrl);