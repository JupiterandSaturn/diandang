import bus from '@/bus'
export default({
    state:{
          imagelist:[]
    },
    mutations:{
         SET_INDEX(state,obj){
             state.imagelist=obj.imagelist;
         }  
    },
    actions:{
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