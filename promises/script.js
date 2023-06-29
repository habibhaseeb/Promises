//this statement consist of JavaScript promise.
const promiseFun = new Promise(
    function(resolved , reject){
        if (resolved("your funtion is resolved")) {
            return resolved;
        }
        else{
            return reject;
            var reason = Error("wrong statement!")
            console.log(reject("somethong went wrong"));
        // Its rejects the promises
        throw reason; //← ← ← ← ← ←
        }
    }
);