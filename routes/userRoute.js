const express=require('express')
const router=express.Router()
router.post('/register',(req,res)=>{
    res.json({message:'User registered successfully'})

})
router.post('/login',(req,res)=>{
    res.json({message:'User logged in successfully'})
    
})
router.get('/current',(req,res)=>{
    res.json({message:'User current data retrieved successfully'})
    
})
module.exports=router
