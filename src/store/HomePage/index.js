import bus from '@/bus'
export default ({
    state: {
      typename:[]
    },
    mutations: {
      
    },
    actions: {
        getHomePaging({commit},obj){
        bus.$axios.post("/pawn/type/findBrandByTypeId/1,1,10")
        .then(({data})=>{
        //   console.log(data)
        
        })
      }
    }
  })