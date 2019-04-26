<template>
    <div class='central'>
        <div class='center'>
             <div class='center_1'>
               <!-- <img class='circle' src='../../../../public/images/imgPersonal/c.png'> -->
               <i class="el-icon-circle-check-outline circle"></i>
             </div>
             <div class='center_2'>
                <h5>您的订单已提交成功</h5>
             </div>
             <div class='center_3'>
                 <input type='text' placeholder="查看详情">
             </div>
             <div class='center_4'>
                <div class='cen'>
                    <p>如有疑问，请联系客服</p>
                </div>
            </div>
       </div>
    </div> 
</template>
<script>
export default {                                                                                      
    name:'central'
}
</script>
<style scope>

/* .central{
      width:100%;
      height:750px;
      } */
.central .center{
              width:1366px;
              height:750px;
              margin: 0 auto;
             }
.central .center .center_1{
                           height:353px;
                        }
.central .center .center_1 .circle{
                                    display: block;
                                    opacity:1;
                                    /* margin:0 auto; */
                                    text-align: center;
                                    padding-top:154px;
                                    font-size: 155px;
                                    /* color: green; */
                                    } 
.central .center .center_2{
                           height:81px;
                         }
.central .center .center_2 h5{
                                width:252px;
                                height:37px;
                                font-size:28px;
                                font-family:Microsoft YaHei;
                                font-weight:400;
                                line-height:37px;
                                color:rgba(0,0,0,1);
                                opacity:1;
                                margin:0 auto;
                                padding-top:44px;
                                }
.central .center .center_3{
                                height:89px;
                                width:1366px;
                                display: inline-block
                                }  
.central .center .center_3 input{
                                width:163px;
                                height:45px;
                                background:rgba(27,27,27,1);
                                opacity:1;
                                border:none;
                                display: block;
                                margin:0 auto;
                                margin-top: 44px
                              }
.central .center .center_3 input::-webkit-input-placeholder{
                                                                text-align: center;
                                                                width:56px;
                                                                height:19px;
                                                                font-size:14px;
                                                                font-family:Microsoft YaHei;
                                                                font-weight:400;
                                                                line-height:19px;
                                                                color:rgba(255,255,255,1);
                                                                opacity:1;
                                                            } 
/* .central .center .center_3 input::-ms-input-placeholder{
                                 text-align: center;
                                 width:56px;
                                 height:19px;
                                 font-size:14px;
                                 font-family:Microsoft YaHei;
                                 font-weight:400;
                                 line-height:19px;
                                 color:rgba(255,255,255,1);
                                 opacity:1;
                             }  */
.central .center .center_4{
                                height:102px ;
                                overflow: hidden;
                            }
.central .center .center_4 .cen{
                                    width:954px;
                                    height:56px;
                                    border-top:1px solid rgba(135,135,135,1);
                                    border-bottom:1px solid rgba(135,135,135,1);
                                    margin:0 auto ;
                                    margin-top:44px;
                          }
.central .center .center_4 p{
                                width:954px;
                                height:56px;
                                font-size:14px;
                                font-family:Microsoft YaHei;
                                font-weight:400;
                                line-height:56px;
                                color:rgba(0,0,0,1);
                                opacity:1;
                                text-align: center;
                                } 
</style>
