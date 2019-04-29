import bus from "@/bus"
export default{
    state:{
        listMsg:'',
        total:0
    },
    mutations:{
        GET_ORDER_MSG(state,obj){
            state.listMsg = obj.data;
            console.log(state.listMsg)
            console.log(state.listMsg[0].orderTime)
            state.total = 0;
            for(var i in state.listMsg){
                state.total += state.listMsg[i].price
            }
        }

    },
    getters:{

    },
    actions:{
        listShow({commit}){
            bus.$axios.post("/user/personalOrder/list")
            .then(({data})=>{
                // console.log(data.orderList)
                commit('GET_ORDER_MSG',{
                    data:data.orderList
                })
            })
        }
    }
}