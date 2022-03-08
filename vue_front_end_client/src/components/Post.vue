<template>
    <div id=post>
        <div class=input>
            <el-input v-model="title" placeholder="标题"></el-input>
        </div>
        <div class=input>
            <el-input v-model="imageSrc" placeholder="主页图片url（选填）"></el-input>
        </div>
        <div class=input>
            <el-input
            type="textarea"
            :rows="rows"
            placeholder="请输入内容(html格式)"
            v-model="content">
            </el-input>
        </div>
        <el-button @click=postBook class="button" type="primary">提交</el-button>
    </div>

</template>

<script>
import BookService from '../services/BookService'
export default {
    data(){
        return{
           title:'',
           imageSrc:'',
           content:'',
           rows:'30',
           bookid:'',
        }
    },
    methods:{
        postBook(){

                /* 提交book
                参数：title,imageSrc,content 
                返回值：{msg:ok/err}
                */
            let vm=this
            BookService.postBook(this.title,this.imageSrc,this.content).then(function(res){
                vm.bookid=res.data.bookid;
                vm.success();
            }).catch(function(err){
                vm.fail(err);
            });
        },
        success(){
            let vm=this;
            this.$confirm('发表成功！', '信息', {
            confirmButtonText: '立即查看',
            cancelButtonText: '继续发表',
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