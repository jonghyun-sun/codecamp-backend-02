import { FindService } from "./services/check.services.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from "../phone.js";
import dotenv from "dotenv";

dotenv.config();

export class TokenRequestController {
  tokenRequest = (req, res) => {
    const myphone = req.body.phone;

    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone);
    if (isValid) {
      // 2. 핸드폰 토큰 6자리 만들기
      const mytoken = getToken();
      console.log(mytoken);

      //phone문서에 가서 번호 있나 확인
      try {
        const checkService = new FindService(myphone, mytoken);
        checkService.checkPhoneExist();
      } catch (err) {
        console.log(err);
        return;
      }

      sendTokenToSMS(myphone, mytoken);
      res.send("전송완료");
    }
  };

  completeCheck = (req,res) =>{
    try {
        let aaa = await Tokens.findOne({ phone: req.body.phone });
        if (aaa === null /*|| docs.token !== req.body.token*/) {
          res.send("false");
        } else {
          try {
            await Tokens.findOneAndUpdate(
              { phone: req.body.phone },
              { isAuth: true }
            );
            res.send("true");
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
        return;
      }
  }
}
