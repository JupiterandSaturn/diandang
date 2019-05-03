<template>
       <div class="goods-list">
        <ol>
            <li v-for="(item,index) in this.$store.state.third.middle" :key=index>
                
                <img :src="item.productsAddress" alt="">
               
                <p>{{item.typeName}}</p>
            </li>
        </ol>
       </div>
</template>
<script>
import vuex from "vuex"
export default {
    created() {
        console.log(this.$route.query)
    },
    mounted(){
        this.$store.dispatch("getMmm",{
            typeId:this.$route.query.typeid,
            brandId:this.$route.query.brandid,
            offset:0,
            limit:8
        });

    },
}
</script>

<style scope>
.goods-list{
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;
            }
.goods-list ol{

                
                margin-top: 7px;
              }
.goods-list ol li{
                    float: left;
                    width: 298px;
                    height: 398px;
                    text-align: center;

                    background: #E7E7E7;
                    border-bottom: 1px solid white;
                    border-right: 1px solid white;
                    box-sizing: border-box;
                    overflow: hidden;

}

.goods-list ol li span{
                        display: inline-block;
                        width: 0px;
                        height: 100%;
                        vertical-align: middle;
                    }
.goods-list ol li img{
                        width: 289px;
                        height: 307px;
                        display: inline-block;
                        vertical-align: middle;
                       }
</style> 
