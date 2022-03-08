import hr from "../HttpRequest.js"
// 用于向后端获取book的相关数据
class BookService{

/*     获取当前页数据，
    参数：当前页，一页多少个数据
    返回值是一个json数组，每一个json包括：title , uploader , image_src, bookid(用于确定详情页) */

    getCurrentPageData(currentPage,pageSize){
        return hr.post('/book/get_page_data',{currentPage:currentPage,pageSize:pageSize});
    }
    
    /* 获取一共有几个books，返回promise */
    getBookQuantity(){
        return hr.get('/book/get_books_quantity').then((res)=>{
            let quantity=res.data.quantity;
            return Promise.resolve(quantity);
        })
    }

/* 
    获取当前页面的book数据
    参数：bookid
    返回值：title,uploader, content,image_src */
    getBookDataById(bookid){
        return hr.get(`/book/get?bookid=${bookid}`)
    }
    /* 提交book
    参数：title,imageSrc,content 
    返回值：{msg:ok/err}
    */
    postBook(title,imageSrc,content){
        let userid=0//用户系统以后填坑
        let book={title:title,imageSrc:imageSrc,content:content,userid:userid}
        return hr.post(`/book/post`,book);
    }
        /* update book
    参数：title,imageSrc,content ,bookid
    返回值：{msg:ok/err}
    */
    updateBook(title,image_src,content,bookid){
        let book={title:title,image_src:image_src,content:content,bookid:bookid}
        return hr.put(`/book/update`,book);
    }
    deleteBook(bookid){
        return hr.delete(`/book/delete?bookid=${bookid}`);
    }
    
}

export default new BookService();