const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send({data:'connect to the server'})
})

module.exports = router