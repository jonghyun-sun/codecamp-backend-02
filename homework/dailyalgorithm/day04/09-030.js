let compare = (pass1,pass2) => {
    pass1 = pass1.toLowerCase()
    pass2 = pass2.toLowerCase()
    for( i = 0; pass1.length > i; i++){
        if( pass1[i] !== pass2[i] ){
            console.log("잘못된 비밀번호")
            return ;
        }
    }
    console.log("true")
}


compare("12345678","A1asd")