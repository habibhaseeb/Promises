const promise = new Promise((resolve, reject) => {
        // Perform some work (possibly asynchronous)
        // ...
        if ("value") {
        resolve(value);
        } else {
        // Something went wrong because of "reason"
        // The reason is traditionally an Error object, although
        // this is not required or enforced.
        let reason = new Error(message);
        reject(reason);
        // Throwing an error also rejects the promise.
        throw reason;
        }
       })
       promise.then(value => {
        // Work has completed successfully,
        // promise has been fulfilled with "value"
        console.log("resolved is produce")
       }).catch(reason => {
        // Something went wrong,
        // promise has been rejected with "reason"
        console.log("reject somthing went wrong!");
});