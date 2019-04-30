import bus from '@/bus'

export default({
    state:{
        truemodel:{},
        evamodel:{}
    },
    mutations: {
        SET_GOODS_MODEL(state, obj) {
            state.truemodel = obj
        },
        SET_TRUE_MODEL(state, obj) {
            state.evamodel = obj
        }
    },
    actions:{
        getTitle({commit}){
            bus.$axios.post("/pawn/products/findById/1")
                .then(({data})=>{
                    // this.state.ConfigurationSelection.list = data.data
                 // console.log(data.data)
                    commit("SET_GOODS_MODEL",data.data)
                })
        },
        setTitle({commit},obj){
            bus.$axios.post("/pawn/evaluate",{
                proId:obj.proId,
                brandId:obj.brandId,
                model:obj.model,
                peakPrice:obj.peakPrice,
                productsAddress:obj.productsAddress,
                pageView:obj.pageView,
                creationTime:obj.creationTime,
                releaseTime:obj.releaseTime,
                percent:obj.percent,
            }).then(({data})=>{
                console.log(data);
                commit("SET_TRUE_MODEL",data);

            })
        }
    }
})