function countLetter(str) {
	let count = 0;
    str = str.toLowerCase()
    console.log(str)
    for( i = 0; str.length > i; i++){
        if(str[i] === "a" ){
            count = count + 1
        }
    }
    console.log(count)
}


countLetter("ccACcaCba")