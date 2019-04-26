<template>
     <div class='middle'>
        <ul>
            <li><input class='two' type='checkbox'></li>
            <li><div class='nav'></div></li>
            <li>
                <h6>苹果</h6>
                <p class='mid_1'>2015年  13寸</p>
                <p class='mid_2'>名称</p>
                <a class='mid_3' href='#'>编辑</a>
                <span class='sp1'> | </span>
                <a class='mid_4' href='#'>删除</a>
            </li>
            <li><span class='sp2'></span></li>
            <li><input class='three' type='text' value="数量"></li>               
            <li><span class='sp3'>总价</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'middle',
    data(){
          return{
             message:[
                 {
                    type,
                    year,
                    name,
                    revise,
                    delet,
                 },
                 {
                    type,
                    year,
                    name,
                    revise,
                    delet,
                 },
             ]
                }
           }
        }
</script>
<style scope>
.middle ul .two{
                    width:18px;
                    height:18px;
                    background:rgba(255,255,255,1);
                    opacity:1; 
                    margin-left:33px;
                    margin-top:55px;
                    } 
.middle .nav{
                width:219px;
                height:324px;
                border:1px dashed;
                margin-left:19px;
                margin-top:10px;
                } 
.middle ul li h6{
                    width:28px;
                    height:19px;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-top:74px;
                    } 
.middle ul .mid_1{
                    width:90px;
                    height:19px;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(135,135,135,1);
                    opacity:1;
                } 
.middle ul .mid_2{
                    width:94px;
                    height:19px;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(135,135,135,1);
                    opacity:1;
                    } 
.middle ul .mid_3{
                    width:28px;
                    height:19px;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    display: inline-block;
                    margin-top:119px;
                }
.middle ul .mid_4{
                    width:28px;
                    height:19px;
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    line-height:19px;
                    color:rgba(5,5,5,1);
                    opacity:1;
                    margin-top:119px;
                    } 
.middle ul .sp1{
                    color:rgba(135,135,135,1);
                    }

.middle ul .three{
                        width:83px;
                        height:44px;
                        border:1px solid rgba(200,200,200,1);
                        opacity:1;
                        margin-left:12px;
                        margin-top:66px;
                        }
.middle .three::-webkit-input-value{ 
                                        display: inline-block;
                                        margin:11px 31px 14px 12px;
                                        width:40px;
                                        height:19px;
                                        font-size:14px;
                                        font-family:Microsoft YaHei;
                                        font-weight:400;
                                        line-height:19px;
                                        color:rgba(5,5,5,1);
                                        opacity:1;
                                    }                          
.middle .sp2{
                display: inline-block;
                width:0px;
                height:85px;
                border:1px solid rgba(200,200,200,1);
                opacity:1;
                margin-left:183px;
                margin-top:66px;
                }
.middle .sp3{
                display: inline-block;
                width:87px;
                height:26px;
                font-size:20px;
                font-family:Microsoft YaHei;
                font-weight:400;
                line-height:26px;
                color:rgba(5,5,5,1);
                opacity:1;
                margin-left:80px;
                margin-top:72px;
            } 
</style>
