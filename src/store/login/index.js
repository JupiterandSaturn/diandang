import bus from '@/bus';
import Router from 'vue-router'
import Vue from "vue"
export default{
    state:{
        username:'',
        password:'',
      
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
                if(data.code === 0){
                    location.href="/index"
                }else{
                    if(data.code === 1){
                        alert(data.msg)
                    }
                }
            })
        },
      
    }
}