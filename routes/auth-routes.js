const router = require("express").Router()

//auth login
router.get("/login",(req,res)=>{
    res.render("login")
})
//auth logout
router.get("/logout",(req,res)=>{
    res.send("loggin out!!")
})
//google login
router.get("/google",(req,res)=>{
    //res.render("google")
    res.send("loggin in with google!!")
})

module.exports = router