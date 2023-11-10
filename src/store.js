import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      clicklike: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
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
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
