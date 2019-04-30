import bus from '@/bus'

export default({
    state:{
        evalmodel:{}
    },
    mutations:{
        SET_TRUE_MODEL(state, obj) {
            state.evalmodel = obj
        }
    },
    actions:{
        getTitle({commit}){
            bus.$axios.post("/pawn/evaluate")
                .then(({data})=>{
                    // this.state.ConfigurationSelection.list = data.data
                    console.log(data.data)
                    commit("SET_GODS_MODEL",data.data)
                })
        }
    }
})