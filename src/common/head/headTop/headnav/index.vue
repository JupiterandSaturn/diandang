<template>
    <div class="contentBottom">
		<ul>
			<li v-for="(item,index) in list"><a href="#">{{item}}</a></li>
		</ul>
	</div>
</template>

<script>
export default {
     data(){
         return{
			 list:["手机回收","平板电脑回收","笔记本回收","摄影摄像回收","智能数码回收"]
		}
    }
}
</script>

<style lang="scss">
	.contentBottom{
		width:100%;
	}
	.contentBottom>ul{
		display: flex;
		justify-content: center;
		margin-top:12px;
	}
	.contentBottom>ul>li{
		margin-right:37px;
	}
	.contentBottom>ul>li>a{
		font-size:12px;
		color:#F8F7F4;
	}
</style>
