<template>
    <div id="selection">
        <Head/>
        <div class="CS_banner">
            <div class="CS_banner1">
                <div class="CS_banner2">
                    <div class="bannerLeft">
<<<<<<< HEAD
                        <div class="imgBox" >
                            <img :src=$store.state.ConfigurationSelection.truemodel.productsAddress alt="">
                            <h2>{{$store.state.ConfigurationSelection.truemodel.model}}</h2>
                            <h3>回收最高价：<span> ￥{{$store.state.ConfigurationSelection.truemodel.peakPrice}}</span></h3>
=======
                        <div class="imgBox">
                            <img :src="imgUrl" alt="">
                            <h2>苹果 15年 13寸 MacBook Air</h2>
                            <h3>回收最高价：<span> ￥4，999</span></h3>
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
                        </div>
                    </div>
                    <div class="bannerRight">
                        <ul>
                            <li><Choose1/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Foot/>
    </div>
</template>

<script>
    import Head from '../../common/head'
    import Choose1 from '../../components/choose/choose-one'
<<<<<<< HEAD
    import Foot from '@/components/currency/page-bottom.vue'
=======
    import Choose2 from '../../components/choose/choose-two'
    import Foot from '../../common/foot'
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306

    export default {
        name: 'selection',
        data(){
          return{
<<<<<<< HEAD

=======
              imgUrl:require("../../assets/ConfigurationSelection/juxing15@2x.png"),
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
          }
        },
        components: {
            Head,
            Choose1,
            Foot
<<<<<<< HEAD
        },
        mounted(){
            this.$store.dispatch("getTitle");
=======
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
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
    .CS_banner{
        width: 100%;
        .CS_banner1{
            height: 838px;
            margin: 18px;
            background:#E3E3E3;
            .CS_banner2{
                width: 1200px;
                height: 838px;
                margin: 0 auto;
                .bannerLeft{
                    float: left;
                    .imgBox{
                        width: 333px;
                        height:296px;
                        margin-top:222px;
                        img{
                            width: 333px;
                            height:296px;
                        }
                        h2{
                            text-align: center;
                            margin-top:65px;
                            font-family: 'Microsoft YaHei';
                            color:#1B1B1B;
                            font-size: 14px;
                            line-height: 19px;
                            font-weight: 400;
                        }
                        h3{
                            text-align: center;
                            margin-top:17px;
                            font-family: 'Microsoft YaHei';
                            color:#1B1B1B;
                            font-size: 14px;
                            line-height: 19px;
                            font-weight: 400;
                            span{
                                font-size: 20px;
                            }
                        }
                    }
                }
                .bannerRight{
                    float: left;
                    width: 521px;
                    height:521px;
                    margin-top:132px;
                    margin-left: 310px;
                    li {
                        margin-bottom: 10px;
                        .el-select {
                            width: 520px;
                        }
                    }
                }
            }
        }
    }
<<<<<<< HEAD
    .fromselect{
        border:none;
        border-radius:0px;
        box-shadow: 0 0 0 0;
        background: #E3E3E3;
        .el-scrollbar{
            background: #E3E3E3;
            border:none;
            border-radius:0px;
            box-shadow: 0 0 0 0;

=======
    .el-select-dropdown{
        background:#E3E3E3 ;
        .el-scrollbar{
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
            .el-select-dropdown__item{
                float: none;
                width: 520px;
                height: 50px;
                background: #000;
                color: #fff;
                text-align: center;
                margin: 10px 0;
            }
        }
    }

</style>
