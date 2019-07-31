const express=require('express')
const Category=require('../models/category')

const router=express.Router()

router.get('/',(req,res)=>{
    Category.find()
        .then((categories)=>{
            res.send(categories)
        })
        .catch((err)=>{
            res.send(errors)
        })

})

router.post('/',(req,res)=>{
    const body=req.body
    const category=new Category(body)
    category.save()
    .then((category)=>{
        res.send(category)
    })
    .catch((err)=>{
        res.send(category)
    })
})

module.exports=router