import bus from '@/bus';
import Vue from "vue"
export default {
    state: {
        username: localStorage.userName,
        password: localStorage.password,
        captcha:'',
        mobile: '',
        href:true

    },
    mutations: {
        SET_REGISTER_MSG(state, obj) {
            state.username = localStorage.userName = obj.userName;
            state.password = localStorage.password = obj.password;
            state.mobile = obj.mobile;


        }
    },
    getters: {

    },
    actions: {
        userRegister({ commit }, obj) {
            // console.log("/pawn/demo/register/", obj.data)
            // {"username":"xiaoming","password":123456,"captcha":"null","mobile":"123213213"}
            bus.$axios.post("/pawn/demo/register/", obj.data)
                .then(({ data }) => {
                    console.log(data);
                    if(data.code === 0){
                        commit("SET_ADMINID_ADMINNAME",{
                            username:data.username,
                            password:data.password
                            
                        })
                       
                       location.href="/login"
                 
                    }
                });
            // console.log("/pawn/demo/registerName/"+obj.data.username)
            bus.$axios.post("/pawn/demo/registerName/" + obj.data.username)
                .then(({ data }) => {
                    if(data.code === 1){
                        alert(data.msg)
                    }
                   
                    
                })
            bus.$axios.post("/pawn/demo/findmobile/"+obj.data.mobile)
            .then(({data})=>{
                if(data.code === 1){
                    alert(data.msg)
                }
               
            })
           


        }

    }
}