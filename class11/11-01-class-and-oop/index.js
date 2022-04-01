const aaa = new Date() //Date 설명서 aaa는 설명서로 만든 물체
console.log(aaa.getFullYear())
console.log(aaa.getMonth()+1)


class Monster{
    power = 10 //함수 앞에도 function x =>변수 앞에도 x

    constructor(aaa){
        this.power = aaa

    }//생성자


    attack(){
        console.log("공격하자!!")
        console.log("내 공격력은" + this.power + "이야") //하나로 묶여있기에 다른데서 값 가져올때는 this. 붙여줘야한다 //this는 안에서 라는 뜻
    }
    run = () =>{
        console.log("도망가자!")
    }
}

const mymonster1 = new Monster()  //공격력은 undefined
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(50) //생성자 안에 인수로 50을 받는다
mymonster2.attack()
mymonster2.run()

