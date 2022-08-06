const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    if(req.url == '/vegetables') {
        const file = fs.readFileSync('./vegetables.json', 'utf8');
        console.log(file);
        res.write(file);
    }
     else if{
        if(req.url == '/vegetables/rootVegetables') {
            const file = fs.readFileSync('./vegetables/rootVegetables.json', 'utf8');
            console.log(file);
            res.write(file);
        
    }
    else {
        res.write('wrong url');
    }
    res.end();
}).listen(4000);