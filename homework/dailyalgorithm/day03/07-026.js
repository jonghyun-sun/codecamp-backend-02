function makeOdd(num){ 
	let str = '';
    let a = 0
    for( i = 1; num > i; i++){
        if( i % 2 !== 0 ){
            a = a + i + str
        }
        

    }
    if(num % 2 != 0 ){
        a = a + num;

    }
    console.log(a)
}

makeOdd(8)