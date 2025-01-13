const usersModel = require('../model/UserModel');
const bcrypt = require('bcryptjs');//install this as bcrypt
//var salt = bcrypt.genSaltSync(10); 
//var hash = bcrypt.hashSync("B4c0/\/",salt);
const jwt = require('jsonwebtoken');
//const checkAuth = require('../middleware/check-auth')
const SECRET_KEY = "NOTESAPI";
const signup = async (req, res) => {
    //exiting user check , hashed password, user creation,token generate steps showing here
    const { username, email, password } = req.body;
    try {

        const existingUser = await usersModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        //step 1 in jwt const
        const hashedPassword = await bcrypt.hash(password, 10);
        //step 2 in jwt 
        const result = await usersModel.create({
            username: username, email: email, password: hashedPassword
            // or   hashedPassword inplace of password in right side,
        }); // console.log(result.password)
        //console.log(result.username) 
        //below line use to generate token step 3 in jwt
        const token = jwt.sign({ username: result.username, email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json({ user: result, token: token })
    } catch (error) {
        console.log("ERROR while signup: ", error);
        res.status(500).json({ message: 'ERROR WHILE SIGNUP:', error });
    };
};
//for signin user
const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await usersModel.findOne({
            email: email
        });
        const payload = {
            userId: existingUser._id, username: existingUser.username,
            email: existingUser.email, password: existingUser.password
        }
        // console.log(existingUser);
        if (!existingUser) {
            return res.status(404).json({ message: "User not exists" });
        } //use below line if you want to bcrypt step4 in jwt
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        // console.log(matchPassword);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        } //step 5 in jwt 
        const token = jwt.sign(payload, SECRET_KEY);
        res.status(201).json({
            success: true, user: payload, token: token
        });
    } catch (error) {
        console.log("ERROR while signin:",
            error); res.status(500).json({ message: 'ERROR WHILE SIGNIN:', error });
    }
};
const profile = (req, res) => {
    const userId = req.user.userId; //this line from middleware folder
    //console.log(user) // console.log('my user',userId)
    const loggedInUserProfile = usersModel.findById(userId).exec().then((result) => {
        res.json({
            success: true, data: result
        });
        return res.json(result)
    }).catch(err => {
        res.json({
            success: false, message: "server error"
        })
    });
}
const logout = (req, res) => { //remove the token to logout from frontend only
    res.json({ message: "Logout successfull" });
}
module.exports = {
    signin,
    signup, logout, profile
};