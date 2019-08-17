const express=require('express')
const Category=require('../models/category')
const Note=require("../models/note")

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


// router.get('/:id',(req,res)=>{
//     const id=req.params.id
//     Promise.all([Category.findById(id),Note.find({category:id})])
//     .then(response=>{
//         res.json({
//             category:response[0],
//             note:response[1]
//         })
//     })
//     // .findById(id)
//     // .then(category=>{
    //     Note.find({category:id})
    //     .thCategoryen(notes=>{
    //         res.json({
    //             category,
    //             note
    //         })
    //     })
    // })
// })

module.exports=router