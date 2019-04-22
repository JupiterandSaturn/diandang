<template>
    <div id="nav">
        <div class="logo">
            <div class="logo-content">
                logo
            </div> 
        </div>
        <h5>关于公司</h5>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #nav{
        width:100%;
        height:132px;
        text-align:center;
        position:relative;
    }
    #nav>h5{
        padding-top:63px;
        font-size:26px;
        color:#1B1B1B;
        /* margin-top:89px; */
        font-weight: 500;
    }
    #nav>.logo{
        width:40px;
        height:40px;
        background:#DEDEDE;
        position:absolute;
        top:-19px;
        left:50%;
        margin-left:-19px;
        line-height:40px;
        transform: rotate(45deg);
    }
    .logo-content{
        font-size:11px;
        transform:rotate(-45deg);
    }
</style>
