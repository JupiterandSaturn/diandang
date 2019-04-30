import bus from "@/bus"
export default{
    state:{
        typeName:''
    },
    mutations:{

    },
    actions:{
        getTitle(){
            // console.log(123);
            bus.$axios.post("/pawn/type/list")
            .then(({data})=>{
                // console.log(data);
               
                this.state.typeName = data.data;
                // console.log(this.state.typeName);
            })
        }
    }
}