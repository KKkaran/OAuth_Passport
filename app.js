const express = require("express")
const app = express()

app.set("view engine","ejs")

//routes go below here..
app.get("/", (req,res)=>{
    res.render("home")
})
app.post("/auth/google",(req,res)=>{
    res.render("")
})





app.listen(3000, () =>{
    console.log("now listening on 3000 port!!")
})