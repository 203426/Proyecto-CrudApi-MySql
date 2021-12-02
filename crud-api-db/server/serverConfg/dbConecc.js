const mysql=require('mysql');

module.exports=()=>{
    return mysql.createPool ({
        host:'localhost',
        user: 'root',
        password: 'steven',
        database:'cafeteria'
    });
}