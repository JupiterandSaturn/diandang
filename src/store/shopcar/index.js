import bus from "@/bus"
export default{
    state:{
        goodsMsg:[],
        total:0,
        goodsId:''
    },
    mutations:{
        SET_GOODS_MSG(state,obj){
            state.goodsMsg = obj.goodsMsg;
            // console.log(state.goodsMsg);
           state.total = 0;
            for(var item in state.goodsMsg){
                // console.log(item);
                   
                state.total += state.goodsMsg[item].price;
                
               
            }
            // console.log(state.total)
        },
        UPDATE_GOODS_MSG(state,obj){
            state.goodsMsg = obj.goodsMsg;
        }
      
    },
    getters:{

    },
    actions:{
        getShopCar({commit},obj){
            bus.$axios.post("/user/shoppingCart/list")
            .then(({data})=>{
            //   console.log(data);
              
                commit('SET_GOODS_MSG',{
                   goodsMsg:data.shoppingCart
                 
                   
                })
                
            })
        },
        delGoods({commit},obj){
            console.log(obj.data);
            bus.$axios.post("user/shoppingCart/del",obj.data)
            .then(({data})=>{
                // console.log(data);
            })
        },
        updateGoods({commit},obj){
            bus.$axios.post("/pawn/products/findById/"+obj.data.ids)
            .then(({data})=>{
                console.log(data);
                commit('UPDATE_GOODS_MSG',{
                    // goodsMsg:data.data
                })
            })
        }

    }
}