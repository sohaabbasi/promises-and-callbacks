console.log("Callback practice")
function practice(callback){
      setTimeout(() => {
          console.log("Started practice initially") 
          callback("I like callback")         
      });
}
function practiced(callback){
    setTimeout(() => {
        console.log("I have practiced")
         callback("I am completely fimiliar with Callbacks")

        
    });
}

function callback(value){
    console.log(value)
    practiced(mycallback);

}
function mycallback(value){
    console.log(value)
}
practice(callback);