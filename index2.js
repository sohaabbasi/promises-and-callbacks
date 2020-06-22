
console.log("Now i want to Practice Promises")
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

let promise = practice(3);
promise.then(function(value){
    console.log(value)
    return practiced();
})
.then(function(value){
    console.log(value)

})
.catch(function(error){
    console.log(error)
})
