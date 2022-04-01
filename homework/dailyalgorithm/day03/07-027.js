function bigNum(str) {
	let biggest = 0;
    for( i = 0; str.length > i; i++ ){
        str[i] = Number(str[i])
        if( str[i] > biggest){
            biggest = str[i]
        }
        
    }
    console.log(biggest)
}


bigNum("72732732")