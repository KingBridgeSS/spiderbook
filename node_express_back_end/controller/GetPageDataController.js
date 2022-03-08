// 和页面显示，分页功能相关的controller

const gpdd=require('../dao/GetPageDataDao');
//book数量
exports.getBookQuantity=(req,res)=>{
    gpdd.getBookQuantity(function(err,data){
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.send(data);
        }
    });
}

//当前页数据
exports.getCurrentPageData=(req,res)=>{
    let currentPage=req.body.currentPage;
    let pageSize=req.body.pageSize;
    gpdd.getCurrentPageData(currentPage,pageSize,function(err,data){
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.send(data);
        }
    });
}


