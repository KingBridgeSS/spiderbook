// 和页面显示，分页功能相关的DAO
const connection=require('../domain/MySqlConnection');

// 获取book数量
exports.getBookQuantity=function(result){//参数是回调函数
    connection.query('select count(*) from books;',function(err,res){
        if(err){
            result(err,null);
            return;
        }
        else{
            let retObj={quantity:res[0]['count(*)']};
            result(null,retObj);
            return;
        }
    })
}

// 获取当前页面book信息用于缩略图，需要获取title, uploader, image_src, bookid
exports.getCurrentPageData=function(currentPage,pageSize,result){
    let start=(currentPage-1)*pageSize;
    let len=pageSize;
    connection.query(`select title,uploader,image_src,bookid from books order by bookid desc limit ?,?;`,
    [parseInt(start),parseInt(len)],//不加parseInt会被预编译成字符串
    function(err,res){
        if(err){
            console.log(err.message);
            result(err,null);
            return;
        }
        else{
            result(null,res);
            return
        }

    });
}