<template>
     <div id="logo-info-more">
            <input type="button" value="加载更多" @click='moreChange'>
    </div> 
</template>
<script>
export default {
    methods:{
         moreChange(){
             this.offset+=2;
               this.$store.dispatch("getMiddle",{limit:8,offset:this.offset,typeId:this.$store.state.second.goodslist[0].typeId}); 
         },
    },
        mounted() {
        this.$store.dispatch('getMiddleFff')
        // this.$store.dispatch("getMiddleIndex");
    },
    
}
</script>
<style>

#logo-info-more{
    text-align: center;
    background: #E7E7E7;
    height:110px;
    line-height: 110px;
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
