function factorial (num:number){
    let result:number = 1;
    for(let i:number = 1; i <= num; i++){
        result= result*i;
    }
    console.log(result);
}

factorial(6);