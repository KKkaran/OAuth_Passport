const passport = require("passport")
const GoogleStrat = require("passport-google-oauth20")

passport.use(
    new GoogleStrat({
    //options for strategy

    }),()=>{
        //passport callback
    }
)