<template>
    <div id=post>
        <div class=input>
            <el-input v-model="title" placeholder="标题"></el-input>
        </div>
        <div class=input>
            <el-input v-model="image_src" placeholder="主页图片url（选填）"></el-input>
        </div>
        <div class=input>
            <el-input
            type="textarea"
            :rows="rows"
            placeholder="请输入内容(html格式)"
            v-model="content">
            </el-input>
        </div>
        <el-button @click=updateBook class="button" type="primary">提交</el-button>
    </div>

</template>

<script>
import BookService from '../services/BookService'
export default {
    data(){
        return{
           title:'',
           image_src:'',
           content:'',
           rows:'30',
           bookid:'',
        }
    },
    mounted:function(){
        let bookid=this.getQueryVariable('bookid');
        this.bookid=bookid;
        this.getBookData(bookid);
    }
    ,
    methods:{
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
            //bookservice返回值：title,uploader, content,image_src
            let vm=this;
            BookService.getBookDataById(bookid).then((res)=>{
                let data=res.data;
                vm.title=data.title;
                vm.content=data.content;
                vm.image_src=data.image_src;
            })
        },
        updateBook(){

                /* update book
                参数：title,imageSrc,content,bookid
                返回值：{msg:ok/err}
                */
            let vm=this
            console.log(this)
            BookService.updateBook(this.title,this.image_src,this.content,this.bookid).then(function(res){
                vm.success();
            }).catch(function(err){
                vm.fail(err);
            });
        },
        success(){
            let vm=this;
            this.$confirm('修改成功！', '信息', {
            confirmButtonText: '立即查看',
            cancelButtonText: '继续修改',
            type: 'warning'
            }
            ).then(() => {
                // 立即查看
                window.location='/book?bookid='+vm.bookid;
            })

        },
        fail(err){
        this.$notify.error({
          title: '错误',
          message: JSON.stringify(err)
            })
        },
    }
}
</script>

<style scoped>
.input{
    width: 50%;
    margin-left: auto;
    margin-right:auto;
    margin-top:10px
}
.button{
    position: relative;
    /* 没错left是往右移qwq */
    left: 71%;
    margin-top:10px;
}
</style>