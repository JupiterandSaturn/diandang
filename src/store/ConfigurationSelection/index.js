import bus from '@/bus'

export default({
    state:{
        truemodel:{}
    },
    mutations:{
    SET_GOODS_MODEL(state,obj){
        state.truemodel=obj
    }
    },
    actions:{
        getTitle({commit}){
            bus.$axios.post("/pawn/products/findById/1")
                .then(({data})=>{
                    // this.state.ConfigurationSelection.list = data.data
                 console.log(data.data)
                    commit("SET_GOODS_MODEL",data.data)
                })
        }
    }
})