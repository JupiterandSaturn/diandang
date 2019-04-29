<template>
    <div>
        <pageTop/>
        <PerMiddle/>
        <Foot/>
    </div>
</template>

<script>
import pageTop from    '@/components/currency/page-top.vue'
import Foot from '@/common/foot'
import PerMiddle from '@/components/perMiddle'

export default {
    components: {
        pageTop,
        Foot,
        PerMiddle
    }
}
</script>

<style lang="scss">
    *{
		margin:0;
		padding:0;
	}
	#personal{
		width:100%;
	}
	a{
		text-decoration: none;
	}
	li{
		list-style:none;
	}
</style>