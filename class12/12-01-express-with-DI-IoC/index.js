import express from "express"
import {ProductController} from"./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
import { ProductService } from "./mvc/controllers/services/product.service.js"
import { CashService } from "./mvc/controllers/services/cash.service.js"
import {PointService} from "./mvc/controllers/services/point.service.js"

const app = express()

const productService = new ProductService() // api 요청때마다 만들 수 없으니 따로 빼놓음
const cashService = new CashService() // new 한번으로 모든 곳에서 재사용 가능

const pointService = new PointService()

//상품 api
const productController = new ProductController(cashService,productService)
app.post("/products/buy", productController.buyProduct)
app.post("/products/refund",productController.refundProduct)

//쿠폰(상품권) api
const couponController = new CouponController(pointService) 
app.post("/coupons/buy",couponController.buyCoupon)


app.listen(3000)