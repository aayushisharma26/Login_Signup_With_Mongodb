const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Blog')
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})


const signupSchema=new mongoose.Schema({
    name : {
        type:String,
        required:true

    },
    email : {
        type:String,
        required:true,
        unique:true
        

    },
    password : {
        type:String,
        required:true
       

    }
        
    
  
})
// console.log("done")
const Register=new mongoose.model("register",signupSchema)
module.exports=Register



