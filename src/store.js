import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
        clickedFilterName: '',
        likes: 0,
        isClicked: false,
        more: {},
    }
  },
  mutations : {
    // ! payload = 받아온 data를 의미함
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
    },
    setMore(state, payload){
        state.more = payload
    }
  },
  actions: {
    getMore(store){
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((result) => {
            // ! mutation 실행시킬 때는 무조건 commit을 사용한다
            store.commit('setMore', result.data)
        })
    }
  }
})

export default store