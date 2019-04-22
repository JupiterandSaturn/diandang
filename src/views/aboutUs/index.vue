<template>
  <div id="personal">
    <Head/>
		<Nav/>
		<Details/>
		<Coures/>
		<Foot/>
  </div>
</template>

<script>
import Head from '../../common/head'
import Nav from './nav/index'
import Details from './details/index'
import Coures from './coures/index'
import Foot from '../../common/foot'

export default {
  name: 'personal',
  components: {
		Head,
		Nav,
		Details,
		Coures,
		Foot
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
