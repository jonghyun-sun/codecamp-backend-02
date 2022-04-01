import { creatBoardAPI } from "../../scrapping.js";
import { changePI } from "../../changepi.js";

import { Tokens } from "../../models/tokens.model.js";
import { User } from "../../models/user.model.js";

export class FindService1 {
  user; //post user

  constructor(aaa) {
    this.user = aaa;
  }
  //회원가입 post
  //핸드폰 토큰 맞춰보기
  checkToken = async () => {
    let check1 = await Tokens.findOne({ phone: this.user.phone });
    if (/*docs.isAuth === false || docs.isAuth === null ||*/ check1 === null) {
      //옵셔널 체이닝 써보자..// isAuth 자체가 없어서 생긴 문제
      return "에러 핸드폰 번호가 인증되지 않았습니다";
    } else {
      //user 정보 스크래핑
      let OG = await creatBoardAPI(this.user);
      let CI = changePI(this.user.personal);
      console.log(OG);

      await User.updateOne(
        { phone: this.user.phone },
        { og: OG, personal: CI }
      );
      return this.user._id;
    }
  };

  //회원목록 조회
  checkUserlist = async () => {
    const userList = await User.find();
    return userList;
  };
}

export class FindService2 {
  phone;
  token;

  constructor(bbb, ccc) {
    this.phone = bbb;
    this.token = ccc;
  }

  //토큰인증요청
  //phone 문서에 가서 번호 있나 확인
  checkPhoneExist = async () => {
    let check2 = await Tokens.findOne({ phone: this.phone });
    if (check2 === null) {
      //번호가 없을때
      const phone = new Tokens({
        token: this.token,
        phone: this.phone,
        isAuth: false,
      });
      await phone.save();
    } else {
      //번호 있을때
      await Tokens.updateOne({ phone: this.phone }, { token: this.token });
    }
  };
}

export class FindService3 {
  constructor(ddd) {
    this.reqphone = ddd;
  }
  //인증완료
  checkPhoneNum = async () => {
    let check3 = await Tokens.findOne({ phone: this.reqphone });
    if (check3 === null /*|| docs.token !== req.body.token*/) {
      return "false";
    } else {
      try {
        await Tokens.findOneAndUpdate(
          { phone: this.reqphone },
          { isAuth: true }
        );
        return "true";
      } catch (err) {
        console.log(err);
      }
    }
  };
}
