<template>
    <div id='book_div'>
        <div class="header">
            <h1 class='title'>{{title}}</h1>
            <span class='uploader'>上传者：{{uploader}}</span>
            <div class="button">
                <el-button @click="update()"  type="primary" icon="el-icon-edit" circle></el-button>
                <el-button @click="deleteBook" type="danger" icon="el-icon-delete" circle></el-button>
            </div>
        </div>
        <div class=content v-html=content></div>
    </div>
</template>

<script>
import BookService from '../services/BookService'
export default {
    data(){
        return {
            title:'',
            uploader:'',
            content:'',
            bookid:'',
        }
    },
    methods:{
        //获取get参数变量，抄于 https://www.runoob.com/w3cnote/js-get-url-param.html
        getQueryVariable(variable)
        {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    if(pair[0] == variable){return pair[1];}
            }
            return(false);
        },
        getBookData(bookid){
            /* 
                获取当前页面的book数据
                参数：bookid
                返回值：title,uploader, content */
            let vm=this;
            BookService.getBookDataById(bookid).then(function(res){
                vm.title=res.data.title;
                vm.uploader=res.data.uploader;
                vm.content=res.data.content;
                vm.bookid=bookid;
            })
        },update(){
            //update?bookid=
            let url='/update/?bookid='+this.bookid;
            window.open(url);
        },
        deleteBook(){
            let vm=this
            BookService.deleteBook(this.bookid).then(function(res){
                    vm.$notify({
                        title: '信息',
                        message: '删除成功',
                        type: 'success'
                    });
            }).catch(err=>{
                        vm.$notify.error({
                        title: '错误',
                        message: err,
                        });
            })
        }
    },
    mounted:function(){
        let bookid=this.getQueryVariable('bookid');
        this.getBookData(bookid);
    }
}
</script>

<style scoped>
.title{
    text-align: center;
    font-family: "Helvetica Neue",Hevetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.uploader{
    display: block;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color:gray
}
.button{
    text-align: center;
    margin: 15px;
}
.content{
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>

