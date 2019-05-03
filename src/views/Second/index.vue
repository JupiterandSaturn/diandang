<template>
    <div>
        <Head></Head>
        <top></top>
        <middle></middle>
        <Foot></Foot>
    </div>
</template>
<script>
import Head from '@/components/currency/page-top-min.vue'
import top from './second_0/top.vue'
import middle from './second_1/middle.vue'
import Foot from '@/components/currency/page-bottom.vue'


export default {
    components:{
                Head,
                top,
                middle,
                Foot,
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
</style>
