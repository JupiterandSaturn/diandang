import bus from '@/bus'

export default({
    state:{
        setOrder:[],
        getProvinceList:[],
    },
    mutations:{
        SET_PROVINCE(state,obj){
            state.getProvinceList = obj;
        }
    },
    actions:{
        setOrder(){
            bus.$axios.post("/user/user/addUserInfo")
                .then(({data})=>{
                    this.state.order = data.code;
                    console.log(this.state.order);
                })
        },
        getProvinceList({commit}){
            bus.$axios.post("user/address/provinceList")
                .then(({data})=>{
                    // this.state.getProvinceList = data.province;
                    console.log(data.province);
                    commit("SET_PROVINCE",data.province)
                })

        }

    }
})