function zzz(aaa) {
  console.log("+++++++++++++");
  console.log(aaa);
  console.log("++++++++++");
}

@zzz /// funciont zzz
class AppController {}

//public => 밖에서 접근가능
class Aaa {
  constructor(public mypower) {
    this.mypower = mypower;
  }
  ggg() {
    console.log("안녕하세요");
  }
}
const aaa = new Aaa(50);
aaa.mypower;

//private => 바깥에서 접근 불가능
class Bbb {
  constructor(private mypower) {
    this.mypower = mypower;
  }
  ggg() {
    console.log("안녕하세요");
  }
}
const bbb = new Bbb(50);
bbb.mypower;

//readonly => 읽을 수 만 있는것
class Ddd {
  constructor(private mypower) {
    this.mypower = mypower;
  }
  ggg() {
    console.log("안녕하세요");
  }
}
const bbb = new Bbb(50);
bbb.mypower;

//yarn dev 가 안되유,,
