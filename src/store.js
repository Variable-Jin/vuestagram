import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      clicklike: false,
    };
  },
  mutations: {
    좋아요(state) {
      if (state.clicklike == false) {
        state.likes++;
        state.clicklike = true;
      } else {
        state.likes--;
        state.clicklike = false;
      }
    },
    증가(state, data) {
      state.age += data;
    },
    이름변경(state) {
      state.name = "park";
    },
  },
});

export default store;
