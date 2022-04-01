class Car {
    
    hpower
    kind
    color

    constructor(aaa,bbb,ccc){
        this.hpower = aaa,
        this.kind = bbb
        this.color = ccc
    }

    start(){
        console.log("마력" + this.hpower +"출발하자!!")
        console.log("색상:"+ this.color)
        console.log("종류:"+this.kind)
    }

    stop(){
        console.log("멈추자!!")
    }
}

const mycar = new Car(30,"현대","빨강")
mycar.start()