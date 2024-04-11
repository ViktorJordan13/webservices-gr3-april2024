// Asynhronous vs Synchorous
// fs.writeFile -> asinhrona funkcija, toa znaci deka ne ni go blokira izvrsuvanjeto na programot i ni dozvoluva da prodolzime so izvrsuvanje na kodot
// fs.writeFileSync -> ni go blokira izvrsuvanjeto na kodot, i ne cita i ne odi na naredna linija vo kodot duri ne go izvrsi toa sto e sinhrono

//Threads
// Java, Python are multi threaded languages, if we need to do something else, we do it in another thread.
// Javascipt is a single threaded language, so we heavily depend on asynchronous execution of code so our only thread doesn't get blocked

// Promises in JavaScript are a way to handle asynchronous operations and manage their result

// Promise has 3 states:
// 1. fullfilled
// 2. rejected
// 3. pending

//Example of Promise
function performAsyncOperation(success) {
    return new Promise ((resolve, reject) => {  // resolve and reject here are callback functions
        if(success){
            resolve("Operation is succesfull");
        }else{
            reject ("Operation is unsucessfull");
        }
    });
}

// Callback functions - ES5 - outdated najcesto zaradi callback hell sto se slucuva so niv
// Promises - ES6 - ok ama kompliciran e nacinot na koj se pisuvaat i se sozdava mnogu kod - syntactical sugar over callbacks
// Async/await - ES7 - momentalno "najdobro" resenie - syntatical sugar over promises

// succesfull Promise 
// .then((res) => console.log(res)) // Operation is succesfull
// .catch((error) => console.error(error)); //  ova nema da se izvrsi ako promisot ni e uspesen

// failed Promise 
// .then((res) => console.log(res)) // ovde nema ni da vleze bidejki promise ni e unsucessfull
// .catch((error) => console.error(error)); //  ova ke se izvrsi bidejki promisot ni e ne uspesen

async function main(){
    try {
        const successPromise = performAsyncOperation(true);
        const successResult =  await successPromise; // bez await ke ni vrati samo Promise
        console.log("Result:", successResult);
        // successPromise -> performAsyncOperation(true) -> ke vrati nov promise koj e faten vo resolve
    }catch(err){
        console.log("Error", err);
    }

    try {
        const failedPromise = performAsyncOperation(false);
        const failedResult =  await failedPromise; // bez await ke ni vrati samo Promise
        console.log("Result:", failedResult);
    }catch(err){
        console.log("Error:", err);
    }
}

main();