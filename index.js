const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({message:'Status:UP'});
})

app.listen(3001,()=>{
    console.log('Api initialized')
})