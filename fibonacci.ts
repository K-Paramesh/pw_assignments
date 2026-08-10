function fibonacci(num:number){
    let a:number = 0;
    let b:number = 1;

    for(let i:number = 1; i <= num; i++){
        console.log(a);
        let c:number = a + b;
        a = b;
        b = c;
    }
}

fibonacci(10);