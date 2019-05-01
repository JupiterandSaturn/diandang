import bus from "@/bus"
export default({
    state: {
        typename:[]
    },
    mutations: {
        SET_TITLE(state,obj){
            state.typename = obj.typename
        }
    },
    actions: {
          getTop({commit}){
              bus.$axios.post('/pawn/type/header')
             .then(({data})=>{
                 this.state.typename=data.data
                 console.log(this.state.typename)
                 commit("SET_TITLE",{
                     typename:data.data
                 })
                })
          },
        
          
          }
    
    
})
