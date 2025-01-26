const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const secretKey1 = crypto.randomBytes(64).toString('hex');
const secretKey2 = crypto.randomBytes(64).toString('hex');









const app = express();
app.use(cookieParser());
const secretKey = secretKey1;
const secretKey3 = secretKey2
// console.log(secretKey);

app.use(express.json());
app.use(cors({
  origin : ["http://localhost:5173"],
  credentials:true
  
}

));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/");





app.post('/info', async (req, res) => {
  const { name,user, pass } = req.body;
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(pass, salt);

    // Save the user with the hashed password
    const newUser = new userModel({ name,user, pass: hashedPassword });
    await newUser.save();
    const friends = new friendsModel({user});
    await friends.save()

    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



// Login route
app.post("/login", async (req, res) => {
  const { user, pass } = req.body;
  const existingUser = await userModel.findOne({ user });
  if (existingUser && await bcrypt.compare(pass, existingUser.pass)) {
    const token = jwt.sign({ user }, secretKey, { expiresIn: '30m' });
    const reftoken = jwt.sign({ user }, secretKey3, { expiresIn: '1h' });
    res.cookie("accesstoken",token,{maxAge:180000})
    res.cookie("refreshtoken",reftoken,{maxAge:3600000,httpOnly:true,secure:true,sameSite:"strict"})

    // const Login = require('../login/src/Login.js');



    console.log(token)
    console.log(reftoken)
    console.log(req.cookies.accesstoken)


    // res.json({token})

    return res.json({login:true})

    

    
   
  
    // res.status(201).json({ message: 'User registered' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});




const verifyuser = (req,res,next)=>{
  const access_token = req.cookies.accesstoken
  if(!access_token){
    if(renewtoken(req,res)){
      next()

    }

  }
  else{
    jwt.verify(access_token,secretKey,(err,decoded)=>{
      if(err){
        return res.json({valid:true,message:"Invalid token"})
      }else{
        req.user = decoded.user;
        next()

      }
    })
  }
}
const renewtoken = (req,res,next)=>{
  const refresh_token = req.cookies.refreshtoken
  let exist = false
  if(!refresh_token){
    return res.json({valid:false,message:"No Refresh token"})

  }
  else{
    jwt.verify(refresh_token,secretKey3,(err,decoded)=>{
      if(err){
        return res.json({valid:true,message:"Invalid token"})
      }else{
        const token = jwt.sign({ user:decoded.user }, secretKey, { expiresIn: '1m' });
        res.cookie("accesstoken",token,{maxAge:60000})
        exist = true;


      }
    })
  }
  return exist;
}




app.get('/dashboard',verifyuser,(req,res)=>{
  return res.json({valid:true,message:"authorised"})
})

app.post("/delete-cookie", (req, res) => {
    res.clearCookie('refreshtoken');
    res.clearCookie('accesstoken');
    res.json("Cookie deleted");
  });
  
  app.listen(3001, () => {
    console.log("server is running on port 3001");
  });
  

