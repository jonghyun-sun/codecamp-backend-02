class SkyUnit {
    run(){
        console.log("날라서 도망가자")
    }
    constructor(){

    }
}

class GroundUnit{
    run=() => {
        console.log("뛰어서 도망가자!")

    }
}

class Monster extends SkyUnit { //extends는 상속하기
    power = 10

    constructor(aaa){
        super(300) // => 인자는 extends 된거의 constructor에 들어감(SkyUnit 의 constructor)
    }

    attack = () =>{
        console.log("공격력은" + this.power + "이야")
    }
}

const mymonster1 = new Monster()
mymonster1.attack()
mymonster1.run()