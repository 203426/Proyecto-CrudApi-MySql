const express= require('express');
/*const path=require('path');*/
const cors=require('cors')
const bodyParser= require('body-parser');

const app=express();


//Setting
app.set('port', process.env.PORT||8080);
/*app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../app/views'));*/


//MiddleWare
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

module.exports=app;