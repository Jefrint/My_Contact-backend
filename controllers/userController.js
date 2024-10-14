const {pool} = require('../database')
const bcrypt = require('bcrypt');

const registerUser=async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password ){
        res.status(400)
        throw new Error("all fields are mandotory")


    }
   const [current]= await pool.query('select * from user where username=? and email=? ',[username,email])

   const hashpass =await bcrypt.hash(password,10);
  
   if(current.length===0){

    try{
        pool.query('insert into user (username,email,password) values (?,?,?) ',[username,email,hashpass],function(error, results, fields) {
            if (error) {
                console.error('Error occurred:', error);
                return res.status(500).send("Error while adding user");
            }
            console.log('User inserted');
            res.send("user has been registered")
        })
       
    }
    catch{
        res.status(500)
        throw new Error("Error while added user");
        
    }


   }
   else{
    res.send("User already Exist Please login")
    }
}



const login=async (req,res)=>{
    res.send("USER Login")
}

const current=async (req,res)=>{
    res.send("USER current")
}

module.exports={registerUser,login,current}