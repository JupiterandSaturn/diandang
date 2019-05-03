<template>
    <div class='rg_top'>
        <div class='one'>
        <span class='rt_1'>订单小计</span>
        <span class='rt_2'>已选一件商品</span>
        </div>
        <div class='two'>
        <p class='to1'>商品总计
            <span>￥</span>
        </p>
        <p class='to2'>运费
            <span>免费</span>
        </p>
        <p class='to3'>总计
            <span>￥</span>
        </p>
        </div>
        <div class='three'>
        <input class='tr1' type='button' value='立即结算'>
        <input class='tr2' type='button' value='继续添加'>
        </div>
    </div>
</template>
<script>
export default {
     name:'top',

}
</script>
<style scope>
.rg_top .one{
                width:306px;
                height:55px;
                border-bottom:1px solid rgba(200,200,200,1);
                margin:0 auto;
                }
.rg_top .one .rt_1{
                    display: inline-block;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(135,135,135,1);
                    opacity:1;
                    margin-left:25px;
                    margin-top:23.5px;
                    } 
.rg_top .one .rt_2{
                    display: inline-block;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-top:23.5px;
                    margin-left:135px;
                } 
.rg_top .two{
                width:306px;
                height:158px;
                border-bottom:1px solid rgba(200,200,200,1);
                margin:0 auto;
                } 
.rg_top .two .to1{
                    display: inline-block;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-left:24px;
                    margin-top:23.5px;
                    } 
.rg_top .two .to1 span{
                        display: inline-block;
                        width:70px;
                        height:21px;
                        font-size:16px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:19px;
                        color:rgba(5,5,5,1);
                        opacity:1;
                        margin-left:164px;
                        } 
.rg_top .two .to2{
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-left:24px;
                    margin-top:14px;
                    }
.rg_top .two .to2 span{
                        display: inline-block;
                        width:28px;
                        height:19px;
                        font-size:14px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:19px;
                        color:rgba(135,135,135,1);
                        opacity:1;
                        margin-left:204px;
                           } 
.rg_top .two .to3{
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-left:24px;
                    margin-top:27px;
                    }  
.rg_top .two .to3 span{ 
                        display: inline-block;
                        /* width:94px; */
                        height:31px;
                        font-size:24px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:28px;
                        color:rgba(5,5,5,1);
                        opacity:1;
                        /* margin-top:17px; */
                        margin-left:158px;
                        }
.rg_top .three{
                width:306px;
                height:170px;
                margin:0 auto;
                }                               
.rg_top .three .tr1{
                        display: inline-block;
                        width:303px;
                        height:42px;
                        background:rgba(27,27,27,1);
                        opacity:1;
                        margin-top:31.5px;
                        font-size:14px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:17px;
                        color:rgba(255,255,255,1);
                        opacity:1;
                        }

.rg_top .three .tr2{
                    display: inline-block;
                    width:303px;
                    height:42px;
                    border:2px solid rgba(27,27,27,1);
                    opacity:1;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:17px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-top:16px;
                    }           
</style>
