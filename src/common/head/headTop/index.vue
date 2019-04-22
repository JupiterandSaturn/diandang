<template>
	<div id="headContent">
		<div class="contentTop">
			<HeadTopL/>
			<div class="company">
				公司名称
			</div>
			<HeadTopR/>
		</div>
		<HeadNav/>
	</div>
</template>

<script>
import HeadNav from './headnav/index'
import HeadTopR from './headTopR/index'
import HeadTopL from './headTopL/index'

export default {
	name:"headContent",
	components:{
		HeadNav,
		HeadTopR,
		HeadTopL
	}
}

</script>

<style lang="scss">
	.headContent{
		width:100%;
		height:100%;
	}
	.contentTop{
		width:100%;
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.contentTop>.company{
		width:152px;
		height:37px;
		display:flex;
		justify-content: center;
		background:rgba(212,206,201,1);
		font-family:STSong;
		font-weight:400;
		font-size:14px;
		line-height:35px;
		color:rgb(52,52,52);
		margin-right:-56px;
		margin-top:7px;
	}
	
	
	.contentTop a{
		color:#fff;
	}
	

	
</style>
