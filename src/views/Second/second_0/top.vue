<template>
    <div class='main'>
       <div class='main_1'>
         <ul>
               <li>
                    <img src="../../../../public/images/imgPersonal/11.png" alt="">
                    <p>手机</p>
                </li>
                <li>
                    <img src="../../../../public/images/imgPersonal/11.png" alt="">

                    <p>平板电脑</p>
                </li>
                <li>
                    <img src="../../../../public/images/imgPersonal/11.png" alt="">

                    <p>笔记本</p>
                </li>
                <li>
                    <img src="../../../../public/images/imgPersonal/11.png" alt="">

                    <p>摄影摄像</p>
                </li>
                <li>
                    <img src="../../../../public/images/imgPersonal/11.png" alt="">

                    <p>智能数码</p>
                </li>
          </ul>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scope>
.main{
    background: white;
    overflow: hidden;
}
.main .main_1{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.main .main_1 ul{
    width: 100%;

    border-bottom: 1px solid #707070;
    overflow: hidden;
}
.main .main_1 ul li{
    float: left;
    width: 20%;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    color: #878787;
    margin-top: 31px;
    margin-bottom: 10px;
}
.main .main_1 ul li:nth-of-type(3){

    color: #1B1B1B;

}
.main .main_1 ul li img{
    height: 56px;
}
</style>