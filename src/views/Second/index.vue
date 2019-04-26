<template>
    <div>
        <top></top>
        <middle></middle>
    </div>
</template>
<script>
import top from './second_0/top.vue'
import middle from './second_1/middle.vue'

export default {
    components:{
                top,
                middle,
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
