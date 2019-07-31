const express=require('express')
const router=express.Router()
const notesController=require('../app/controllers/notesController')

//NOTES ROUTE

router.get('/notes',notesController.list)

router.post('/notes',notesController.create)

router.get('/notes/:id',notesController.show)

router.delete('/notes/:id',notesController.destroy)

router.put('/notes/:id',notesController.update)

module.exports=router