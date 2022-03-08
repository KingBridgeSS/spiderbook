const connection=require('../domain/MySqlConnection');

//根据id获取

exports.getBookDataById=function(bookid,result){
    // 返回值：title,uploader, content,image_src
    connection.query('select title,uploader,content,image_src from books where bookid=?',parseInt([bookid]),function(err,data){
        if(err){
            result(err,null);
            return;
        }
        result(null,data[0]);
        return
    });
    
}
// post book
exports.postBook=function(book,result){
    connection.query('insert into books set ?',book,function(err,data){
        if(err){
            result(err,null)
        }
        else{
            result(null,data)
        }
        return ;
    })
}
//update book
exports.updateBook=function(book,result){
    connection.query('update books set ? where bookid=?',[book,book.bookid],function(err,data){
        if(err){
            result(err,null)
        }
        else{
            result(null,data)
        }
        return ;
    })
}

//删
exports.deleteBook=function(bookid,result){
    connection.query('delete from books where bookid=?',[bookid],function(err,data){
        if(err){
            result(err,null)
        }
        else{
            result(null,data)
        }
        return ;
    })
}