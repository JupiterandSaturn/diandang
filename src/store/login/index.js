import bus from '@/bus';
export default{
    state:{
        username:'',
        password:''
    },
    mutations:{

    },
    getters:{

    },
    actions:{
        userLogin({commit},obj){
            console.log(obj)
            bus.$axios.post("/pawn/demo/login",
                obj.data
            )
            .then(({data})=>{
                console.log(data);
            })
        },
      
    }
}