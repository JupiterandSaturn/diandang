import bus from '@/bus'

export default({
    state:{
        setOrder:[],
        getProvinceList:[],
        getCityList:[],
    },
    mutations:{
        SET_PROVINCE(state,obj){
            state.getProvinceList = obj;
        },
        SET_CITY(state,obj){
            state.getCityList = obj;
        }
    },
    actions:{
        setOrder(){
            bus.$axios.post("/user/user/addUserInfo")
                .then(({data})=>{
                    this.state.order = data.code;

                    // console.log(this.state.order);
                })
        },
        getProvinceList({commit}){
            bus.$axios.post("user/address/provinceList")
                .then(({data})=>{
                    // console.log('进入getProvinceList')
                    this.state.getProvinceList = data.province;
                    // console.log(data.province);
                    commit("SET_PROVINCE",data.province)
                })
        },
        getCityList({commit},url){
            bus.$axios.post("user/address/city/")
                .then(({data})=>{
                    this.state.getCityList = data.data;
                    console.log(this.state.getCityList);
                    commit("SET_CITY",data);
                })
        }

    }
})