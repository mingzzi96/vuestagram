import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        clickedFilterName: '',
        likes: 0,
        isClicked: false,
    }
  },
  mutations : {
    // payload -> 받아온 data를 의미함
    changeFilterName(state, payload){
        state.clickedFilterName = payload
    },
    changeLikes(state) {
        state.isClicked = !state.isClicked;
        if(state.isClicked === true) {
            return state.likes++
        }else {
            return state.likes--
        }
    }
  }
})

export default store