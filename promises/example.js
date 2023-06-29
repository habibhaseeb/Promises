// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = "Data successfully fetched!";
        
        // Resolve the promise with the data
        resolve(data);
        
        // Reject the promise with an error
        // reject("Error: Unable to fetch data!");
      }, 2000);
    });
  }
  
  // Using the promise
  fetchData()
    .then((result) => {
      console.log(result); // Output: Data successfully fetched!
    })
    .catch((error) => {
      console.log(error); // Output: Error: Unable to fetch data!
    });
  