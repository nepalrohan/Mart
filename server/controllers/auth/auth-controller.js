import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';

// register

export const registerUser = async (req, res) => {
 
    const {userName, email, password} = req.body;

    try {
        
    const checkUser = await User.findOne( { $or: [
        { email }, 
        { userName }
    ]});
    if(checkUser)
         {return res.json({success:false, message: 'User already exists, try another email or username'})}

    else {

const hashPassword = await bcrypt.hash(password, 12);
const newUser = new User({userName, email, password: hashPassword});
await newUser.save();

return res.status(200).json({success:true, message: 'Account created successfully'});

    }
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'Something went wrong during registration'});
    }
};

//login

export const loginUser = async (req, res) => {

    const {email, password} = req.body;





    try {
        const checkUser = await User.findOne({email});

        if(!checkUser) return res.json({success:false, message: 'User not found, please register first'});
        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if(!checkPassword) return res.json({success:false, message: 'Invalid password'});
        const token = jwt.sign({email: checkUser.email, id: checkUser._id, userName:checkUser.userName, role:checkUser.role}, process.env.JWT_SECRET, {expiresIn: '60m'});
         res.cookie('token', token, {httpOnly: true, secure:false}).json({success:true, message: 'User logged in successfully', user:{
        email: checkUser.email,
        id: checkUser._id,       
        role:checkUser.role,
        userName:checkUser.userName
       }});


    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'Something went wrong during login'});
    }
};

//logout



export const logoutUser = async (req, res) => {

    try {
        res.clearCookie('token').json({success:true, message: 'User logged out successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'Something went wrong during logout'});
    }
}



//auth-middleware

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({success:false, message: 'Unauthorized user'});
    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedData;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({success:false, message: 'Unauthorized user'});
    }

}

