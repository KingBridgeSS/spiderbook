const mysql=require('mysql');
const config=require('../config/MySqlConfig')

const connection=mysql.createConnection({
        host:config.HOST,
        port:config.PORT,
        user:config.USER,
        password:config.PASSWORD,
        database:config.DB,
    }
);

connection.connect((e)=>{
    if(e){
        console.log('数据库连接失败');
        throw e;
    }
    else{
        console.log('数据库连接成功');
    }
})

module.exports=connection;
