const router  = require("express").Router()
const List = require('../model/todolist')

router.get('/',(req,res)=>{
    res.render("index.ejs")
})

router.post('/addtask',async(req,res)=>{
    const {task,desc} = req.body
   const listRecord =  new List({task:task,desc:desc})
await listRecord.save()
res.redirect('/record')
})

router.get('/record',async(req,res)=>{
    const listRecords =  await List.find()
    res.render('record.ejs',{listRecords:listRecords})
})

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id
    const listRecord = await List.findById(id);
    res.render('edit.ejs', { listRecord: listRecord })
})

router.post('/editrecord/:id', async (req, res) => {
    const { task,desc} = req.body
    const id = req.params.id
    await List.findByIdAndUpdate(id, { task:task,desc:desc })
    res.redirect('/record')
})






router.get('/delete/:id', async (req, res) => {
    const id = req.params.id
    await List.findByIdAndDelete(id)
    res.redirect('/record')
})
module.exports  = router