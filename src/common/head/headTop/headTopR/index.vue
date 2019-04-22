<template>
    <div class="headRight">
		<div v-for="(item,index) in headRight" :id="forId(index)">
			<i class="iconfont" v-html="item.icon"></i>
			<a href="#">{{item.title}}</a>
			<Result/>
		</div>
		
	</div>
</template>

<script>
import Result from './result/index'

export default {
	name:"headRight",
	components:{
		Result
	},
    data() {
        return {
            headRight:[
                {
                    title:"个人中心",
                    icon:"&#xeca1;"
                },
                {
                    title:"购物袋 99+",
                    icon:"&#xe6c1;"
                },
                {
                    icon:"&#xe631;"
                }
			]
        }
	},
	methods:{
		forId: function(index){
			return "headRight_"+index
		}
	}
}
</script>

<style lang="scss">
    .contentTop>.headRight{
		display:flex;
		justify-content: center;
		align-items: center;
		font-size:11px;
	}
    #headRight_0{
		margin-right:40px;
	}
	#headRight_0:hover #result{
		display:block;
		position:absolute;
	}
	#headRight_1{
		margin-right:17px;
	}
	#headRight_2{
		width:22px;
		height:22px;
		border:2px solid #fff;
		border-radius:50%;
		text-align: center;
		line-height:22px;
		margin-right:20px;
	}
	#headRight_2>.iconfont{
		font-weight: 500;
		margin-right:0;
	}
	.iconfont{
		font-size:14px;
		color:#fff;
		margin-right:5px;
    }
    
</style>
