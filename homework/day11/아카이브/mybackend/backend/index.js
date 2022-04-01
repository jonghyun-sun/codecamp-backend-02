import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { TokenRequestController } from "./controllers/token.request.controller.js";

dotenv.config(); //env 사용위한 명령어
const app = express();
app.use(express.json());

//try catch  쓸거면 콜백함수 안써도 된다(if, else 있는거)=>해결
//user 정보 올바른지 확인

const tokenRequestController = new TokenRequestController();

//토큰 인증요청 post
app.post("/tokens/phone", tokenRequestController.tokenRequest);

//인증 완료 patch
app.patch("/tokens/phone", tokenRequestController.completeCheck);

//회원가입 post
app.post("/user", tokenRequestController.userInfo);

// //회원 목록 조회
app.get("/user", tokenRequestController.userList);

// //스타벅스 커피 목록 조회 get

mongoose.connect("mongodb://my_database:27017/codecamp");

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
