const express = require('express');
const app = express();
const status = {
    UP: 'UP',
    DOWN: 'DOWN'
}

let statusConn = status.UP;

app.get('/', (req, res, next) => {
    if(verifyStatus(statusConn,res)){
        res.status(200).send({ message: 'Status:HOME PAGE'});
    }
})

app.get('/status', (req, res, next) => {
    res.status(200).send({ message: 'Status:'+statusConn});
})

app.get('*', (_req, res) => {
    if (!res.headersSent) {
        messagePageNotFound(res);
    }
})

verifyStatus = (_statusConn,res)=>{
    if(_statusConn == status.DOWN){
        messagePageNotFound(res);
        return false;
    }    
    return true;  
}

messagePageNotFound = (res) =>{
    console.log(new Error('Page not found'));
    res.status(400).send({ message: 'Status:PAGE NOT FOUND' });
}

app.listen(3001, () => {
    console.log('Api initialized')
})