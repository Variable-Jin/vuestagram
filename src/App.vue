<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <p>{{ 내이름 }} {{ age }} {{ likes }}</p> -->

  <!-- <h4>안녕 {{ $store.state.age }}</h4>
  store.js에 있는 state 꺼내 사용법 : store.state.~
  <button @click="$증가(10)"></button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->

  <Container
    @write="작성한글 = $event"
    :이미지="이미지"
    :게시물="게시물"
    :step="step"
  />
  <!-- <button @click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button>
  <div style="margin-top: 500px"></div> -->
</template>

<script>
import Container from "./components/Container.vue";
import PostingData from "./assets/PostingData.js";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      게시물: PostingData,
      count: 0,
      step: 3,
      이미지: "",
      작성한글: "",
      filter: "",
      counter: 0,
    };
  },
  mounted() {
    this.emitter.on("filter", (a) => {
      this.filter = a;
    });
  },
  components: {
    Container: Container,
  },

  computed: {
    name() {
      return this.$store.state.name;
    },
    ...mapState(["name", "age", "likes"]),
    ...mapState({ 내이름: "name" }),
  },

  methods: {
    ...mapMutations(["setMore", "좋아요", "증가"]),

    publish() {
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.filter,
      };
      this.게시물.unshift(내게시물);
      this.step = 0;
    },
    //  axios 요청 실패시 .catch()코드가 실행
    // axios.post('URL', {name: 'kim'}).then(success).catch((err)=>{
    //   err(에러메세지) ~
    // })
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((결과) => {
          this.게시물.push(결과.data);
          this.count++;
        });
    },
    upload(e) {
      let 파일 = e.target.files;
      console.log(파일[0].type);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.이미지 = url;
      this.step++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
