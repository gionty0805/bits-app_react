const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

var whitelist = ['http://localhost:3000', 'http://localhost']

var corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted); 
    },
    credentials:true
}
app.use(cors(corsOptions));

var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use('/api', api);
app.listen(3001, () => console.log('Node.js Server is running on port 3001...'));