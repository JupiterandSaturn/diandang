<template>
    <div>
        <Head></Head>
        <Content></Content>
        <Middle></Middle>
        <Nav></Nav>
        <Foot></Foot>
    </div>
</template>
<script>
// import Head from '@/common/head/index.vue'
import Content from './content/content.vue'
import Middle from './middle/middle.vue'
import Nav from './nav/nav.vue'
import Foot from '@/common/foot/index.vue'


export default {
     name:'',
     components:{
        //  Head,
         Content,
         Middle,
         Nav,
         Foot
     }
}
</script>

<style lang="">
</style>