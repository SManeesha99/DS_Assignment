const router = require('express').Router();
const UserRegstration = require('../models/LoginRegister');
const jwt = require('jsonwebtoken');

// register User----------------------------

router.route("/add").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNumber = req.body.mobileNumber;
    const field = req.body.field;
    const email = req.body.email;
    const password = req.body.password;
    const status = req.body.status;
    

    const newuser = new UserRegstration({

        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password,
        status,
        registerAt:Date.now(),
        
    })

    newuser.save().then(()=>{
        res.json("New User Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//---------------------------------------------------

//get all-----------------------------------------------

router.route("/").get((req,res)=>{
    UserRegstration.find().then((User)=>{
        res.json(User)
    }).catch((err)=>{
        console.log(err);
    })
})

//----------------------------------------

//delete---------------------------------

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await UserRegstration.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error withe delete User", error: err.message});
    })
})

//--------------------------------------

//get one-----------------------------


router.get("/get/:id",async (req,res)=>{

    let userId = req.params.id;

    try{
        const User = await UserRegstration.findById({_id:userId});
        res.json({
            msg:"User found",
            data: User,
        });
    }catch(err){
        return res.status(500).json({message:err.message});
    }
});

//update--------------------------------

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{firstName,lastName,mobileNumber,field,email,password,status}=req.body;

    const updateUser={
        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password,
        status
        
    }
    const update = await UserRegstration.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({alert: "User Details Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({alert:"Error with updating data",error:err.message})
    })
 
})

//login----------------------------------------

router.post("/login", async (req, res) => {
   
    const user = await UserRegstration.findOne({email:req.body.email, password:req.body.password, field:req.body.field});
    if (user){

        
    const tokendetails= {email:req.body.email};
    const accessToken=jwt.sign(tokendetails,process.env.TOKEN_KEY,{expiresIn: '1d'});

    const data = {
        status:true,
        email:user.email,
        id:user._id,
        accesstoken: accessToken,
        firstName:user.firstName,
        lastName:user.lastName,

    };

        res.send(data)
    }else{
        res.send({
            status:false
        })
    }

  });

//---------------------------------------------

module.exports = router;