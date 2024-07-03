import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        clickedFilterName: ''
    }
  },
  mutations : {
    changeFilterName(state, name){
        state.clickedFilterName = name
    }
  }
})

export default store