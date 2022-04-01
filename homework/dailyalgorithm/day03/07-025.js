function makeNumber(num) {
	let str = '-';
    let a = 0;
    for( i = 1; num > i; i++){
        a= a + i + str

    }
    a = a + num
    console.log(a)
}

makeNumber(10)
