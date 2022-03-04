const Register=require('../model/mod')

const jwt=require("jsonwebtoken")

signup= async(req,res)=>{
    try{
        bcrypt
        const reactRegister=new Register({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        const result= await reactRegister.save();
        res.send({message:"signup sucssesfully",result:result})
        // console.log(result);

    }catch(err){
        res.send({message:'Email id already exits!'})
        // console.log('')
    }
}

login=async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password

        const result=await Register.findOne({email:email})

        const token=jwt.sign({id:Register._id},"aayushisharma",{ expiresIn:"8h"})
        console.log(result,token);
        res.send({message:"login successfuly",result:result,token:token})
        if (err){
            res.send(err)
            }
        else{
            console.log("login");
            res.send({success:"User login succesfully",result})
        }     

    }catch(err){
        res.send("no")
    }

}
                
module.exports={signup,login}










