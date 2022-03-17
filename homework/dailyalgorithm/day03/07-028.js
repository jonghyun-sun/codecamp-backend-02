function random() {
    let number = 50
    let a = (Math.floor((Math.random()*100+1)))
    console.log(a)
    if( number < a){
        console.log("win")
    } else if( number > a){
        console.log("lose")
    } else {
        console.log("draw")
    }
  }

  random()