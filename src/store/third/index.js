import bus from "@/bus"
export default({
    state:{
        typename:[], 
        typeId:[],
        brandslist:[],
        middle:[],
        goodlist:[]
    },
    mutations:{
        SET_TITLE(state,typename){
            state.typename=typename;
           // console.log(state.typename)
                            },
         SET_MIDDLE(state,list){
            // state.typeId.push(obj)
            state.middle=list;
            },
       SET_BRAND(state,brandslist){
           state.brandslist=brandslist;
       },
       SET_MORE(state, goodslist) {
                            state.goodslist = state.goodslist.concat(goodslist);
                            localStorage.goodslist = JSON.stringify(state.goodslist)
    }
    },
    actions:{
        getHhh({commit}){
            bus.$axios.post("/pawn/type/header")
            .then(({data})=>{
                // this.state.typename=data;
               //  console.log(data.data,900900);
                commit("SET_TITLE",data.data);
            })
        },
        getbrand({commit},id){
                bus.$axios.post('/pawn/brand/typeBrand',{
                    limit:8,
                    offset:0,
                    typeId:id,
                })
                .then(({data})=>{
                   // console.log(data.rows,"lal");
    
                    commit("SET_BRAND",data.rows);
                })
            
        },
        getMmm({commit},obj){
            bus.$axios.get("/pawn/products/productsList?typeId="+obj.typeId+"&brandId="+obj.brandId+"&offset="+obj.offset+"&limit="+obj.limit)
            .then(({data})=>{
               console.log(data,1111111111)
                 commit("SET_MIDDLE",data.rows);
            })
        },
        getMiddleFff({ commit }) {
            bus.$axios.post('/pawn/brand/typeBrand')
                .then(({ data }) => {

                    // commit("SET_MIDDLEINDEX",{

                    // })
                })
        }
    }
})