const express = require("express")
const router = require("./routes/auth-routes")
const app = express()

app.set("view engine","ejs")

//setup routes //using middlewares
app.use('/auth',router)

//routes go below here..
app.get("/", (req,res)=>{
    res.render("home")
})

router




app.listen(3000, () =>{
    console.log("now listening on 3000 port!!")
})