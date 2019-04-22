<template>
    <div id="coures">
        <ul class="coures-first">
            <li>
                <p>2013年11月<span>公司成立</span></p>
                <span class="circle"></span>
                <span class="across"></span>
            </li>
        </ul>
        <div class="segment">

        </div>
        <ul>
            <li>
                <p>2013年11月<span>公司成立</span></p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #coures{
        width:100%;
        height:1307px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    #coures>.coures-first{

    }
    #coures>.coures-first>li>.circle{
        display:block;
        width:12px;
        height:12px;
        border:1px solid #878787;
        border-radius:50%;
    }
    #coures>.segment{
        width:0;
        height:811px;
        border:2px solid #777;
    }
</style>
