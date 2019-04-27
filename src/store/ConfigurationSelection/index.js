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
                    this.state.list = data.data;
                    console.log(list.data)
                })
        }
    }
})