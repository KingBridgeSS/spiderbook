
const bdd=require('../dao/BookDataDao');

// book数据
exports.getBookDataById=(req,res)=>{
    let bookid=req.query.bookid;
    bdd.getBookDataById(bookid,function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else if(data==null){
            res.send('empty result')
        }
        else{
            res.send(data)
        }
    })
}

//提交book
exports.postBook=(req,res)=>{
    // bdd.postBook(body.title,body.imageSrc,body.content,body.userid,function(err,data){

    // })
    //把驼峰命名的src搞成下划线命名
    book=req.body;
    book.image_src=book.imageSrc;
    delete book.imageSrc;
    //uploader默认是admin,写完用户系统再填坑
    book.uploader='admin'
    bdd.postBook(book,function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else{
            // 添加bookid到返回的book数据中
            book.bookid=data.insertId;
            res.send(book);
        }
    })

}

//update book
exports.updateBook=function(req,res){
    bdd.updateBook(req.body,function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(data)
        }
    })
}
//删book
exports.deleteBook=function(req,res){
    let bookid=req.query.bookid;
    bdd.deleteBook(bookid,function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(data);
        }
    })
}