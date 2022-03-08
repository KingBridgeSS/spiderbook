const express=require('express');
const app=express();
const cors=require('cors');
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//cors设置
app.use(cors({origin:'*'}))

//根目录欢迎界面
app.get('/',function(req,res){
    res.send('欢迎访问spiderbook的后端！');
})
//引入路由
const routerSetter=require('./router.js');
routerSetter(app);

const PORT=8082;
app.listen(PORT,()=>{
    console.log(`服务已在 http://127.0.0.1:${PORT} 运行！`)
})