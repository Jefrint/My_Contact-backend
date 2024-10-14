const express=require("express")
const router=express.Router()

const {registerUser,login,current} = require("../controllers/userController")


router.post("/register",registerUser)
router.post("/login",login)
router.get("/current",current)

module.exports=router;
