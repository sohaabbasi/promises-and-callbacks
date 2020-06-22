
console.log("Now i want to Practice asyn and await")
function practice(data){
    let promise= new Promise(function(resolve,reject){
        setTimeout(() => {
            if(data !=2){
                console.log("started practicing promises")
                resolve("I am knowing little bit")
            }
            else{
                reject("error")
            }


        },1);
    })
    return promise;
}
function practiced(){
    let promise= new Promise(function(resolve,reject){ 
        setTimeout(() => {
            console.log("I am creating another function")
            resolve("yes i got it")
        
        },1);
    })
    return promise;    
}
async function startprocess(){
    let promise= await practice();
    let promise2= await practiced();
    console.log(promise)
    console.log(promise2)

}
startprocess();










