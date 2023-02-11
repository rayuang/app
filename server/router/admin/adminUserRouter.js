import express from "express";
const adminUserRouter = express.Router();

adminUserRouter.post("/user",(req,res)=>{
    console.log("注册");
    res.json({
        code:200,
        msg:{
            content:"succeed"
        }
    });
});


export default adminUserRouter