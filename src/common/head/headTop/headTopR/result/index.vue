<template>
    <div id="result">
        <div class="result-box">
            <i class="iconfont">&#xe600;</i>
            <ul v-for="(item,index) in resultList">
                <li>{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            resultList:["我的订单","我的信息","我的账户","我的卡券","退出登录"]
        }
    }
}
</script>

<style lang="scss">
    #result{
        width:127px;
        height:170px;
        background:#fff;
        display:none;
        margin-top:10px;
        margin-left:-15px;
    }
    .result-box{
        width:127px;
        height:165px;
        .iconfont{
            font-size:28px;
            color:#fff;
            position:absolute;
            top:-19px;
            left:35px;
        }
    }
    #result>.result-box>ul{
        width:100%;
        li{
            width:100%;
            height:33px;
            font-size:10px;
            line-height:32px;
            text-indent:14px;
            color:#1B1B1B;
            border-bottom:1px solid #E7E7E7;
        }
    }
    #result>.result-box>ul>li:hover{
        background:#E5DFD9;
    }
</style>
