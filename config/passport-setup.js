const passport = require("passport")
const GoogleStrat = require("passport-google-oauth20")
const keys = require("../keys/keys")
passport.use(
    new GoogleStrat({
    //options for strategy
    clientID:keys.google.clientId,
    clientSecret:keys.google.clientSecret
    }),()=>{
        //passport callback
    }
)