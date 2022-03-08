const bookRouter=require('express').Router();

const gpdc=require('./controller/GetPageDataController.js');
const bdc=require('./controller/BookDataController')
// 页面数据
bookRouter.post('/get_page_data',gpdc.getCurrentPageData);//第二个参数是回调函数
//book数量
bookRouter.get('/get_books_quantity',gpdc.getBookQuantity);
//获取book数据
bookRouter.get('/get',bdc.getBookDataById);
//提交Book
bookRouter.post('/post',bdc.postBook)
//更新book
bookRouter.put('/update',bdc.updateBook);
//删book
bookRouter.delete('/delete',bdc.deleteBook);
function routerSetter(app){
    //和book相关的路由
    app.use('/api/book',bookRouter);
}

module.exports=routerSetter;