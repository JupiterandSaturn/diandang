import bus from '@/bus'

export default({
    state:{
        setOrder:[],
<<<<<<< HEAD
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
=======
        Province:[],
        City:[],
        Area:[],
    },
    mutations:{
        SET_PROVINCE(state,obj){
            state.Province = obj;
        },
        SET_CITY(state,obj){
            state.City = obj;
        },
        SET_AREA(state,obj){
            state.Area = obj;
        }
    },
    actions:{
        setOrder({commit},obj){
            bus.$axios.post("/user/user/addUserInfo",{
                userId:1,
                familyName: obj.familyName,
                name: obj.trueName,
                nationality : obj.nationality,
                phone : obj.phone,
                email : obj.email,
                sex : obj.sexe,
                birthday : obj.birthday,
            })
                .then(({data})=>{
                    console.log(data);
                })
        },
        Province({commit}){
            bus.$axios.post("user/address/provinceList")
                .then(({data})=>{
                    // console.log('进入getProvinceList')
                    this.state.Province = data.province;
                    console.log(data.province);
                    commit("SET_PROVINCE",data.province)
                })
        },
        City({commit},province){
            // console.log(11111111111111111);
            bus.$axios.post("user/address/city/" + province)
                .then(({data})=>{
                    // console.log(11111111111111111);
                    this.state.City = data;
                    console.log(data.city);
                    commit("SET_CITY",data.city);
                })
        },
        Area({commit},city){
            // console.log(11111111111111111);
            bus.$axios.post("user/address/area/" + city)
                .then(({data})=>{
                    console.log(11111111111111111);
                    this.state.Area = data.area;
                    console.log(data.area);
                    commit("SET_AREA",data.area);
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
                })
        }

    }
})