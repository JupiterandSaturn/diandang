<template>
    <div class='main'>
       <div class='main_1'>
           <ul>
                <li v-for="item in $store.state.second.typename">
                    <img src="../../../../public/images/imgPersonal/9.png">
                    <p>{{item.typeName}}</p> 
                </li>
           </ul> 
       </div>
    </div>
</template>
<script>

import vuex from "vuex"
// import store from '../../../store/second/index.js'
export default {
         mounted(){
             this.$store.dispatch('getTop')
         }
        
}
</script>
<style scope>
/* .main{
    background: white;
    overflow: hidden;
} */
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