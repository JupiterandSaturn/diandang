import bus from '@/bus'
export default({
    state:{
          typename:[123],
          imagelist:[]
    },
    mutations:{
         SET_TOP(state,obj){
            //  console.log(state,obj)
           state.typename=obj.typeName
        },
         SET_INDEX(state,obj){
             state.imagelist=obj.imagelist;
         }  
    },
    actions:{
        getTop({commit}){
            bus.$axios.post("/pawn/type/header")
            .then(({data})=>{
                commit('SET_TOP',{
                    typeName:data.data
                })
            })
        },
        getIndex({commit}){
            bus.$axios.post("/pawn/type/header")
            .then(({data})=>{
               commit('SET_INDEX',{
                imagelist:data.data
               })
            })     
    }
    }
})