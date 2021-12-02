const app=require('./serverConfg/server')
require('./routes/routes')(app);


app.listen(app.get('port'), ()=>{
    console.log('Server runing on port', app.get('port'));

})