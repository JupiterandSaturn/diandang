<template>
<!-- <div>
   <div class='one'>
            {{$store.state.HomePage.imagelist[0]}} 
          <img :src='require($store.state.HomePage.imagelist[1].image)'>
          <span>数码典当</span>
       </div>
     </div>  -->
   <div class='middle'>
         <div v-for="item in $store.state.HomePage.imagelist">
          <img :src="item.image">
          <span>{{item.typeName}}典当</span>
       </div> 
              
   </div> 
</template>
<script>
export default {

    mounted() {
        this.$store.dispatch("getIndex");
      //   console.log(1111222,this.$store.state.HomePage);
      //   console.log(12311121312321312453246361,this.$store.state.HomePage.imagelist[0].image)
    },
}
</script>
<style scope>
.middle{
        width:1200px;
        height:652px;
        background:rgba(231,231,231,1);
        opacity:1;
        position: relative;
        margin:0 auto;
        margin-top:134px;
       }
.middle div:nth-of-type(1){
              width:275px;
              height:202px;
              margin-left:165px;
              margin-top:58px;
              position:absolute;
           }
.middle div:nth-of-type(1) img{
                    width:275px;
                    height:164px;               
                    border:1px dotted grey;
                    }
.middle div:nth-of-type(1) span{
                  padding-top:12px;
                  margin:0 auto;
                  }                    
.middle div:nth-of-type(2){
              width:275px;
              height:223px;
              margin-left:165px;
              margin-top:383px;
              position:absolute;
            }                    
.middle div:nth-of-type(2) img{
              width:275px;
              height:164px;
              border:1px dotted grey;
             } 
.middle div:nth-of-type(2) span{
                  padding-top:33px;
                  margin:0 auto;
                  }    
.middle div:nth-of-type(3){
               width:276px;
              height:548px;
              margin-left:462px;
              margin-top:58px;
              position:absolute;
             }
.middle div:nth-of-type(3) img{
              width:276px;
              height:489px;
             border:1px dotted grey;

             }
.middle div:nth-of-type(3) span{
                  padding-top:33px;
                  margin:0 auto;
                  }
.middle div:nth-of-type(4){
              width:275px;
              height:202px;
              margin-left:760px;
              margin-top:58px;
              position:absolute;
}            
.middle div:nth-of-type(4) img{
              width:275px;
              height:164px;
              border:1px dotted grey;
             }
.middle div:nth-of-type(4) span{
                  padding-top:12px;
                  margin:0 auto;
                  }
.middle div:nth-of-type(5){
              width:275px;
              height:223px;
               margin-left:760px;
              margin-top:383px;
              position:absolute;
}
.middle div:nth-of-type(5) img{
              width:275px;
              height:164px;
              border:1px dotted grey;
             }
.middle div:nth-of-type(5) span{
                  padding-top:33px;
                  margin:0 auto;
                  }
.middle span{
                display: block;
                width:120px;
                height:26px;
                font-size:20px;
                font-weight:400;
                line-height:26px;
                color:rgba(27,27,27,1);
                opacity:1;
                } 


</style>
