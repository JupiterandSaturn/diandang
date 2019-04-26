import bus from '@/bus'

export default({
    state:{
        list:[]
    },
    mutations:{

    },
    actions:{
        getTitle(){
            bus.$axios.post("/pawn/products/findById/1")
                .then(({data})=>{
                    console.log(data)
                })
        }
    }
})