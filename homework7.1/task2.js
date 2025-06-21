function recursive(num){
    if(num <= 0 ){
        return;
    }
    console.log(num);
    recursive(num-1);
}

recursive(15)