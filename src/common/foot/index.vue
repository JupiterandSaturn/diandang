<template>
    <div id="footer">
        <div class="blank1"></div>
        <ul class="first-ul">
            <li>手机典当</li>
            <li>手机典当</li>
            <li>手机典当</li>
            <li>手机典当</li>
            <li>手机典当</li>
            <li>手机典当</li>
        </ul>
        <ul class="last-ul">
            <li>关于我们</li>
            <li>企业信息</li>
            <li>细则条款</li>
        </ul>
        <div class="blank2 small"></div>
        <div class="blank3 small"></div>
        <div class="notice">
            <p>注册我们的账户以获取最新的新闻、公告和特别优惠</p>
            <div class="wire"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #footer{
        width:100%;
        height:208px;
        background:#1B1B1B;
        padding-top:61px;
        display:flex;
        justify-content: center;
    }
    #footer>.blank1{
        width:33px;
        height:33px;
        background:#CECBCB;
        margin-right:71px;
    }
    #footer>.first-ul{
        margin-right:171px;
    }
    #footer>.first-ul>li{
        font-size:12px;
        color:#E5DFD9;
        margin-top:5px;
    }
    #footer>.last-ul{
        margin-right:169px;
    }
    #footer>.last-ul>li{
        font-size:12px;
        color:#E5DFD9;
        margin-top:5px;
    }
    #footer>.small{
        width:13px;
        height:13px;
        background:#fff;
    }
    #footer>.blank2{
        margin-right:20px;
    }
    #footer>.blank3{
        margin-right:159px;
    }
    #footer>.notice{
        width:188px;
        height:36px;
    }
    #footer>.notice>p{
        font-size:12px;
        line-height:30px;
        color:#E5DFD9;
    }
    #footer>.notice>.wire{
        width:196px;
        height:0px;
        border:1px solid #fff;
        margin-top:24px;
    }
</style>
