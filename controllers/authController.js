const signupSchema = require('../middlewares/validator');
const User = require('../models/usersModel');
const { doHash } = require('../utils/hashing');


exports.signup = async(req, res) =>{
    const {email, password} = req.body;

    try{
  const {error, value} = signupSchema.validate({email, password});
  if(error){
   return res.status(401).json({success:false, message: error.details[0].message})
  }

  const existingUser = await User.findOne({email})
   if(existingUser){
    return res.status(401).json({success: false, message: "User with this Email is already exist"});
  }

  const hashedPassword = await doHash(password, 12);
  const newUser = new User({
    email,
    password: hashedPassword,
  })

  const result = await newUser.save();
  result.password = undefined;
  res.status(201).json({success: true, message: "User Created successfully", result, });
    }catch(err){
        console.log(err);
    }
}