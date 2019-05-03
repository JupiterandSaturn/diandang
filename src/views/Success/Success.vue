<template>
    <div>
       <Head></Head>
       <Central/>
       <Foot></Foot>
    </div>
</template>

<script>
import Head from '@/components/currency/page-top.vue'
import Central from './central'
import Foot from '@/components/currency/page-bottom.vue'


export default {
                components:{
                    Head,
                    Central,
                    Foot
                        }
}
</script>

<style scope>
*{
    margin:0;
    padding:0
}
ul,ol li{
       text-decoration: none;
       list-style: none;
       float: left;
}
a{
    text-decoration: none;
}
body{
     width: 100%;
    }
</style>

