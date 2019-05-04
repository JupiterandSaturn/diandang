<template>
    <div>
        <Head></Head>
        <hhh></hhh>
        <mmm></mmm>
        <fff></fff>
        <Foot></Foot>
    </div>
</template>
<script>
import Head from '@/components/currency/page-top-min.vue'
import hhh from './third_0/hhh.vue'
import mmm from './third_1/mmm.vue'
import fff from './third_2/fff.vue'
import Foot from '@/components/currency/page-bottom.vue'

export default {
                components:{
                    Head,
                    hhh,
                    mmm,
                    fff,
                    Foot
                }
}
</script>
<style>
*{
    margin: 0 ;
    padding: 0;
}

a{
    text-decoration: none;
}
li{
    list-style: none;
}
img{
    display: inline-block;
}
ol,ul{
      float:left;
}
</style>
