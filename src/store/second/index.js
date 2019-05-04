import bus from "@/bus"
export default ({
    state: {
        typename: [],
        brandname: [],
        goodslist: []

    },
    mutations: {
        SET_TITLE(state, obj) {
            state.typename = obj.typename
        },
        SET_MIDDLE(state, goodslist) {
            // state.goodslist=obj;
            
            if(localStorage.getItem("goodslist")==state.goodslist){
               // console.log(11)
                state.goodslist = localStorage.getItem("goodslist");
            }else{
                //console.log(22)

                state.goodslist = goodslist;
                localStorage.goodslist = JSON.stringify(state.goodslist)
            }
        },
        SET_MORE(state, goodslist) {
            state.goodslist = state.goodslist.concat(goodslist);
            localStorage.goodslist = JSON.stringify(state.goodslist)
        }


    },
    actions: {
        getTop({ commit }) {
            bus.$axios.post('/pawn/type/header')
                .then(({ data }) => {
                    commit("SET_TITLE", {
                        typename: data.data
                    })
                })
        },
        getMiddle({ commit }, obj) {
          //  console.log(obj)
            bus.$axios.post('/pawn/brand/typeBrand', {
                limit: obj.limit,
                offset: obj.offset,
                typeId: obj.typeId
            }).then(({ data }) => {
               // console.log(data, 123)
                if (obj.offset === 0) {
                    commit("SET_MIDDLE", data.rows);
                } else {
                    commit("SET_MORE", data.rows);
                }
              
            })
        },
        getMiddleIndex({ commit }) {
            bus.$axios.post('/pawn/brand/typeBrand')
                .then(({ data }) => {

                    // commit("SET_MIDDLEINDEX",{

                    // })
                })
        }

    }


})

