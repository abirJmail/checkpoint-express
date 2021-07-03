const express = require('express');
const app = express();
const port =  4000;

console.log('Time:', Date.now(),new Date().getHours(),new Date().getDay());

function logger(req, res, next) {
    console.table({ method: req.method, path: req.url })
   
    var d = new Date();
    var n = d.getHours();
    var day = d.getDay()
    
   if (n>9 && n<17 && day>=1 && day<=5) {
        console.log('Time:', Date.now());
        next()
    } else {
        res.send("Oups, the request is blocked")
    }
}

app.use(logger);

app.use(express.static(__dirname+"/Public"))

app.listen(port, function(){
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
});

