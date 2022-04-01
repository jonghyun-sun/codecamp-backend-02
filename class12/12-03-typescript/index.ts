let aaa = "안녕하세요"; //typescript 는 타입을 추론하는 기능이 있다 =>  제일 처음 들어간 type 으로 판단
aaa = 3;

let bbb: string = "반갑습니다";
bbb = 10;

//문자 타임
let ccc: string;
ccc = "반가워요";
ccc = 3;

// 숫자 타입
let ddd: number;
ddd = "asdfk";

//불린 타입
let eee: boolean;
eee = true;
eee = "dd";

//배열 타입
let fff: number[] = [1, 2, "안녕하세요"]; // 숫자가 들어가는 배열
let ggg: string[] = ["철수", "영희", 12]; //문자가 들어가는 배열
let hhh: (number | string)[]; //숫자 문자 둘다 가능한 배열

//객체 타입
interface Iprofile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; //? => 지금은 없지만 나중에 있을 수도 있다
}

let profile: Iprofile = {
  name: "철수",
  age: 8,
  school: "다람쥐 초등학교",
};

profile.age = "8살";

// 함수 타입
const add = (money1: number, money2: number, unit: string): string => {
  //마지막은 return의 타입
  return money1 + money2 + unit;
};
add(1000, 2000, "원"); //함수는 어디서든 쓸 수 있어서 타입 추론 불가
