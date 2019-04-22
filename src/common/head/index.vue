<template>
  <div id="appHead">
				<HeadShadow/>
    <HeadTop/>
  </div>
</template>


<script>
import HeadTop from './headTop/index';
import HeadShadow from './headShadow/index'

export default {
  name: 'appHead',
  components: {
    HeadTop,
		HeadShadow
  }
}
</script>

<style scoped lang="scss">
	#appHead{
		width:100%;
		height:263px;
		background-image:url(../../../public/images/imgAboutUs/headL1.png);
		background-repeat: no-repeat;
		background-size:100% 100%;
	}
</style>
