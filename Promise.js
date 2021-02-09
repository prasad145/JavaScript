//how to make Promise
// states of Promise
/*  -> pending
    -> fulfilled if fulfilled use then
    -> rejected if rejected use catch
*/
const makeServerRequest = new Promise((resolve, reject) => {
    let resposeFromServer = true; 
    if(resposeFromServer)
    {
        resolve("We got data");
    }
    else
    {
        reject("Data not received");
    }
});
    
makeServerRequest.then(result =>{
        console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});