const dbConecc=require('../serverConfg/dbConecc');


module.exports=app=>{
    const db=dbConecc();
    //Routes
    
    app.get('/api/get',(req,res)=>{
        const sqlSelect='SELECT * from usuarios';
        db.query(sqlSelect,(err,result)=>{
            res.send(result);
        })
    })

    app.post('/api/insert',(req,res)=>{

        const nombre=req.body.nombre;
        const num=req.body.num;

        const sqlInsert='INSERT INTO usuarios (nombre, num) VALUES (?,?)';
        db.query(sqlInsert,[nombre,num], (err,result)=>{
            res.redirect('/');
            
        })
        console.log(req.body);
    })

    app.delete('/api/delete/:id',(req,res)=>{
        const id=req.params.id;
        const sqlDelete='delete from usuarios where id = ?';
        db.query(sqlDelete,id,(err,result)=>{
            if(err) console.log(err);
            else console.log(result);
        })
    })

    app.put('/api/update',(req,res)=>{
        const id=req.body.id;
        const num=req.body.num;
        const sqlUpdate='UPDATE usuarios SET num=? WHERE id=?';
        db.query(sqlUpdate,[num,id],(err,result)=>{
            if(err) console.log(err);
            else console.log(result);
        })
    })


}