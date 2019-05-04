<template>
     <div id="logo-list">
         
            <ul>
                <li v-for="(item,index) in $store.state.second.goodslist" :key="index" @click="handeleDetail(item.typeId,item.brandId)">
                   <i>
                      <img :src="item.brandAddress"><span></span> 
                  </i>
                    <p>{{item.typeName}}</p> 
                </li> 
            </ul>
            <div id="logo-info-more">
                <input type="button" value="加载更多" @click="moreChange">
            </div>
        </div> 
</template>

<script>
export default {
     data(){
         return{
            offset:0,
         }
     },
     methods:{
         moreChange(){
             this.offset+=2;
               this.$store.dispatch("getMiddle",{limit:8,offset:this.offset,typeId:this.$store.state.second.goodslist[0].typeId}); 
         },
         handeleDetail(typeid,brandid){
             this.$router.push({path:'/third',query:{typeid,brandid}})
         }
         

     },
      mounted(){
           this.$store.dispatch("getMiddle",{limit:8,offset:0,typeId:1});
           this.$store.dispatch("getMiddleIndex");  
      }
}
</script>

<style scope>
#logo-list{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}

#logo-list ul{
    position: relative;
    overflow: hidden;
    margin-top: 7px; 

}
 #logo-list ul li{
    float: left;
    position: relative;
    width: 25%;
    height: 390px;
    text-align: center;


    border-bottom: 1px solid white;
    border-right: 1px solid white;
    box-sizing: border-box;
    overflow: hidden;

}
#logo-list ul li i{
    display: inline-block;

    width: 100%;
    height: 390px;
    background: #E7E7E7;
}


#logo-list ul li i span{
                        display: inline-block;
                        width: 0px;
                        height: 100%;
                        vertical-align: middle;
}
#logo-list ul li i img{
    width: 166px;
    height: 150px;
    display: inline-block;
    vertical-align: middle;

} 



#logo-list ul li i:hover{
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    height: 420px;
    background: white;
}

#logo-info-more{
    text-align: center;
    background: #E7E7E7;
    height:110px;
    line-height: 110px;
    clear:both;
}
#logo-info-more input{
    width: 187px;
    height: 49px;
    background: #000000;
    border: none;
    font-size: 14px;
    color: #E5DFD9;
} 

</style>