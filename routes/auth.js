const authController = require("../controllers/auth")
//import { googleAuth, signin, signup } from "../controllers/auth.js";
module.exports = (app)=>{

    //CREATE A USER
    app.post("/signup", authController.signup)

    //SIGN IN
    app.post("/signin", authController.signin)

    //GOOGLE AUTH
    app.post("/google",authController.googleAuth)
}
