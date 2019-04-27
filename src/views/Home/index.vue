<template>
    <div>
        <Head></Head>
        <Content></Content>
        <Middle></Middle>
        <Nav></Nav>
        <Section></Section>
        <Foot></Foot>
    </div>
</template>
<script>
// import Head from '@/common/head/index.vue'
import Content from './content/content.vue'
import Middle from './middle/middle.vue'
import Nav from './nav/nav.vue'
import Section from './section/index.vue'
import Foot from '@/common/foot/index.vue'
import Head from '@/components/currency/page-top-min.vue'


export default {
     name:'',
     components:{
        //  Head,
         Content,
         Middle,
         Nav,
         Section,
         Foot,
         Head
     },
     mounted(){
        
     }
}
</script>

<style lang="">
</style>