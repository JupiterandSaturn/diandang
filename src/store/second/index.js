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
<<<<<<< HEAD
// getTop(){
//     bus.$axios.post('./pawn/type/header')
//     .then(({data})=>{
//         this.state.typename=data.data
//         console.log(this.state.typename)
//     })
// }

// getTop(){
//     bus.$axios.poat('./pawn/type/header')
//     .then(({data})=>{
//         this.state.typename=data.data
        
//     })
// }
// getTop(){
//     this.$axios.post('./pawn/type/header')
//     .then(({data})=>{
//         this.state.typename=data.data
//     })
// }
// getTop(){
//     bus.$axios.post('./pawn/type/header')
//     .then(({data})=>{

//     })
// }
=======

>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
