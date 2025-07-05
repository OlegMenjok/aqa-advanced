function textWithTimeout(text, time){
    function sayHello(){
        console.log(text)
    }
    setTimeout(sayHello, time);
}
textWithTimeout('Hello', 5000);