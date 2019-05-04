<template>
    <div id="third-nav">
           <div class='nav-top'>
            <ul>
                <li><p>分类：</p></li>
                <li><a href='#' v-for="(item,index) in $store.state.third.typename" :key="index">{{item.typeName}}</a></li>
                <!-- <li v-for="(item,index) in $store.state.third.typename" :key="index">
                    <p>{{item.typeName}}</p>
                </li> -->
            </ul>
        </div>
        <div class='nav-bottom'>
            <ol>
                <li><p>品牌：</p></li>
                <!-- <li><a href='#' v-for="(item,index) in $store.state.third.typename" :key="index">{{item.brandName}}</a></li> -->
                <li v-for="(item,index) in $store.state.third.brandslist" :key="index">
                    <p>{{item.brandName}}</p>
                </li>
            </ol>
         </div> 






        <!-- <ul class='third-main-top'>
<li >
        
    <a href='#' v-for='item in $store.state.third.typename'>类别<img src="../../../../public/images/imgPersonal/down.png" alt=""></a>
    <span>{{item.typename}}</span>

    <a href="#">品牌 <img src="../../../../public/images/imgPersonal/down.png" alt=""></a>
</li>
        </ul> -->
    </div>
</template>
<script>
import vuex from "vuex"
export default {
    data(){
      return{
          list:''
      }
    },
       mounted(){
           this.$store.dispatch('getHhh');
  
            this.$store.dispatch('getbrand',this.$route.query.typeid);
       }
}
</script>
<style scope>
    #third-nav{
                /* line-height: 70px; */
                width:1200px;
                margin:0 auto;
                height:70px;
                /* overflow: hidden; */
                }
    #third-nav .nav-top{
                         width:1200px;
                         height:35px;
                         } 
    #third-nav p        { float:left;
                          margin-left:5px;
                          line-height: 35px;
                          align-items: center;
                          overflow: hidden;
                          display: inline-block;
                       }
    #third-nav .nav-bottom{
                         width:1200px;
                         height:35px;                         
                          } 
    #third-nav .nav-top ul li a{
                               
                                float:left;
                                line-height: 35px;
                                align-items: center;
                                margin:0 10px;
                                font-size:20px;
                                /* overflow: hidden; */
                              }
    #third-nav .nav-bottom ol li{
                                float:left;
                                line-height: 35px;
                                align-items: center;
                                margin:0 10px;
                                font-size:20px;
                              }                                                                               
</style>
