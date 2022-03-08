<template>
    <div id="home_div">

        <!-- 卡片 含图片，标题，上传者，按钮-->
        <el-row class="card-row">
            <el-col class="card-col" :span="3" v-for="(card,index) in cardList" :key="index" :offset="2">
                <el-card :body-style="{ padding: '20px'}">
                    <img :src="getImageSrc(card)" class="image" alt="图片加载中">
                    <div style="padding: 14px;">        
                        <span>{{card.title}}</span>
                        <div class="bottom clearfix">
                            <span class="uploader">{{card.uploader}}</span>
                            <el-button @click=checkBook(card) class="button">查看</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <!-- 分页器 -->
        <div class="block" style="text-align:center">
            <!-- current-change是用分页器改变当前页的回调函数 -->
            <el-pagination
                @current-change=handleCurrentChange
                layout="prev, pager, next, jumper"
                :total="pages.totalCards"
                :size="pages.pageSize"
                :current-page="pages.currentPage"
                >
            </el-pagination>
            </div>
            <div class="block">
        </div>

    </div>
</template>

<script>
import BookService from '../services/BookService';//和后端直接交互的类
export default {
    data(){
        return{
            // 页面动态属性
            pages:{
                totalCards:0,
                pageSize:8,
                currentPage:1,
            },
            //当前页card数据
            cardList:[],
        }
    },
    mounted:function(){
        this.handleCurrentChange(1);// 即每次刷新加载第一页
    },
    computed:{
        
    },
    methods:{
        getImageSrc(card){
            //image src为空就换成本地文件
            return card.image_src==''?require('../assets/spider.jpg'):card.image_src;

        },
        //当前页改变
        async handleCurrentChange(currentPage) {
                // 改变默认的页数
                this.currentPage=currentPage;
                // 获取所有books总数
                let vm=this;
                await BookService.getBookQuantity().then((quantity)=>{
                    vm.pages.totalCards=quantity;
                });

                // 获取当前页card数据
                this.getcardList(currentPage);


        },
        getcardList(page){
            //和services层交互
        // 返回值是一个json数组，每一个json包括：title , uploader , image_src, bookid(用于确定详情页)
                let vm=this;
                BookService.getCurrentPageData(page,this.pages.pageSize).then(function(res){
                    vm.cardList=res.data;
                })
        }
        ,checkBook(card){
            let url='/book/?bookid='+card.bookid;
            window.open(url);
        }
    },

}
</script>

<style scoped>
/* 卡片 */
  .card-col {
    margin-bottom: 20px;
  }
  .uploader {
    font-size: 13px;
    color: #999;
    float:left;
    margin-top: 13px;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;

  }

    .button{
    float: right;
    }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }



</style>
