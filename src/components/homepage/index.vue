<template>
    <div id="home">
        <router-link to="/aboutUs" tag="button" class="home">about</router-link>
        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name : 'home',
    methdos:{
        
    },
    components:{
        
    }
}
</script>

<style lang="scss">
    .home{
        width:100px;
        height:20px;
        margin-left:100px;
    }
</style>
