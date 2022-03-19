function grade(num){
    
    if( num > 100 || num <0 ){
        console.log("잘못된 형식")
        return ;
    }
    
    if( num >= 90 ){
        console.log("a")
    } else if ( num >= 80 ){
        console.log("b")
        
    } else if ( num >= 70 ){
        console.log("c")

    } else if ( num >= 60 ){
        console.log("d")

    } else {
        console.log("f")
    }
}

grade(99)