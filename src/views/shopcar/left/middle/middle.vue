<template>
<<<<<<< HEAD
     <div class='left_middle'>
        <ol>
=======
<div>
    <div class='left_top'>
        <ul class='up'>
            <li><input type='checkbox' class='top_box'></li>
            <li><span> 全选</span></li>
            <li class='one'>|</li>
            <li><span> 删除 </span></li>
        </ul>
</div>
     <div class='left_middle'v-for="item in $store.state.shopcar.goodsMsg">
        <ol >
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
            <li><input class='two' type='checkbox'></li>
            <li><div class='nav'><img :src="item.productsAddress" alt=""></div></li>
            <li>
                <h6>{{item.brandName}}</h6>
                <p class='mid_1'>2015年  13寸</p>
                <p class='mid_2'>名称</p>
                <a class='mid_3' href='#' @click="updateGood(item.proId)">编辑</a>
                <span class='sp1'> | </span>
                <a class='mid_4' href='#' @click="delGood(item.id)">删除</a>
            </li>
            <li><span class='sp2'></span></li>
<<<<<<< HEAD
            <li><input class='three' type='text' value="数量"></li>               
            <li><span class='sp3'>总价</span></li>
        </ol>
=======
            <li><input class='three' type='button'  value="数量:1"></li>               
            <li><span class='sp3'>总价{{item.price|currency}}</span></li>
        </ol>
    </div>
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
    </div>
</template>
<script>
export default {
<<<<<<< HEAD
    name:'middle'
        }
</script>
<style scope>
=======
    name:'middle',
    data(){
        return{
            // src:'{{$store.state.shopcar.goodsMsg.productsAddress}}'
          ids:[]
        }
    },
    methods:{
        delGood(ids){
            this.$store.dispatch("delGoods",{
                data:[ids]
            })
            console.log(ids);
        },
        updateGood(ids){
            this.$store.dispatch("updateGoods",{
                data:{
                    ids:ids
                }
            })
        }
    },
    mounted(){
        this.$store.dispatch("getShopCar")
    }

        }
</script>
<style scope>
.left_top .top_box{
            margin-left:33px;
            margin-top:55px;
            width:18px;
            height:18px;
            background:rgba(255,255,255,1);
            opacity:1;
            } 
.left_top .up .one{
           margin-left:10px;
           margin-top:52px;
           color:rgba(135,135,135,1);
            } 
.left_top .up li span{
                width:28px;
                height:19px;
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                line-height:19px;
                color:rgba(5,5,5,1);
                opacity:1;
                display: block;
                margin-left:19px;
                margin-top:53px;
               }  
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
.left_middle ol .two{
                    width:18px;
                    height:18px;
                    background:rgba(255,255,255,1);
                    opacity:1; 
                    margin-left:33px;
                    margin-top:55px;
                    } 
.left_middle ol .nav{
                width:219px;
                height:220px;
               
                margin-left:19px;
                margin-top:10px;
                } 
<<<<<<< HEAD
.left_middle ol li h6{
                    width:28px;
                    height:19px;
=======
/* .left_middle ol .nav img{
               width:219px;
                height:324px;
} */
.left_middle ol li h6{
                    width:90px;
                    text-align: center;
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
                    font-size:14px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-top:74px;
                    } 
.left_middle ol .mid_1{
<<<<<<< HEAD
                    width:90px;
                    height:19px;
=======
                    width:90px; 
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
                    font-size:14px;
                    color:rgba(135,135,135,1);
                } 
.left_middle ol .mid_2{
                    width:94px;
                    font-size:14px;
                    color:rgba(135,135,135,1);
                    } 
.left_middle ol .mid_3{
<<<<<<< HEAD
                    width:28px;
                    height:19px;
=======
                    width:28px;        
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
                    font-size:14px;
                    color:rgba(5,5,5,1);
                    display: inline-block;
                    margin-top:45px;
                }
.left_middle ol .mid_4{
                    width:28px;
                    font-size:14px;            
                    color:rgba(5,5,5,1);
                    margin-top:45px;
                    } 
.left_middle ol .sp1{
                    color:rgba(135,135,135,1);
                    }

.left_middle ol .three{
                        width:83px;
                        height:44px;
                        border:1px solid rgba(200,200,200,1);
                        background: white;
                        margin-left:12px;
                        margin-top:66px;
                        }
.left_middle .three::-webkit-input-value{ 
                                        display: inline-block;
                                        margin:11px 31px 14px 12px;
                                        width:40px;
                                        font-size:14px;                  
                                        color:rgba(5,5,5,1);
                                    }                          
.left_middle .sp2{
                display: inline-block;
                width:0px;
                height:85px;
                border:1px solid rgba(200,200,200,1);
                opacity:1;
                margin-left:183px;
                margin-top:66px;
                }
.left_middle .sp3{
                display: inline-block;
                width:87px;
                height:26px;
                font-size:20px;
                line-height:26px;
                color:rgba(5,5,5,1);
                 margin-left:80px;
                margin-top:72px;
            } 
</style>
