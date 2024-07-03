import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        clickedFilterName: ''
    }
  },
})

export default store