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
                width:340px;
                height:61px;
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
                    margin-left:28px;
                    margin-top:26px;
                    } 
.rg_top .one .rt_2{
                    display: inline-block;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-top:26px;
                    margin-left:167px;
                } 
.rg_top .two{
                width:340px;
                height:176px;
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
                    margin-left:27px;
                    margin-top:26px;
                    } 
.rg_top .two .to1 span{
                        display: inline-block;
                        width:70px;
                        height:21px;
                        font-size:16px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:21px;
                        color:rgba(5,5,5,1);
                        opacity:1;
                        margin-left:182px;
                        } 
.rg_top .two .to2{
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-left:27px;
                    margin-top:16px;
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
                        margin-left:252px;
                           } 
.rg_top .two .to3{
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-left:27px;
                    margin-top:30px;
                    }  
.rg_top .two .to3 span{ 
                        display: inline-block;
                        width:104px;
                        height:31px;
                        font-size:24px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:31px;
                        color:rgba(5,5,5,1);
                        opacity:1;
                        margin-top:19px;
                        margin-left:176px;
                        }
.rg_top .three{
                width:340px;
                height:189px;
                margin:0 auto;
                }                               
.rg_top .three .tr1{
                        display: inline-block;
                        width:337px;
                        height:47px;
                        background:rgba(27,27,27,1);
                        opacity:1;
                        margin-top:35px;
                        font-size:14px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:19px;
                        color:rgba(255,255,255,1);
                        opacity:1;
                        }

.rg_top .three .tr2{
                    display: inline-block;
                    width:337px;
                    height:47px;
                    border:2px solid rgba(27,27,27,1);
                    opacity:1;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-top:18px;
                    }           
</style>
