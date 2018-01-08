import shop from "../../api/shop"
import * as types from "../mutation-types"

const state = {
	all:[]
}

const getters = {
	productsList: state => state.all
}

const actions = {
	getAllProducts({commit}){
		shop.getAllGoods(products => {
			commit(types.RECEIVE_PRODUCTS, { products })
		})
	}
}

const mutations = {
    [types.RECEIVE_PRODUCTS](state, { products }) {
        state.all = products
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

