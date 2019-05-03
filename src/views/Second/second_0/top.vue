<template>
    <div class='main'>
       <div class='main_1'>
           <ul>
                <li v-for="(item,index) in $store.state.second.typename" :key="index" @click="handleRouter(item.typeId)">
                    <img :src=item.image >
                    <p>{{item.typeName}}</p> 
                </li>
           </ul> 
       </div>
    </div>
</template>
<script>

export default {
         mounted(){
             this.$store.dispatch('getTop')
         },
         methods:{
           handleRouter(id){
               this.$store.dispatch("getMiddle",{limit:8,offset:0,typeId:id})
             } 
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