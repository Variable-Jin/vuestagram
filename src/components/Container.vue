<template>
  <div>
    <div v-if="step == 0">
      <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />
    </div>

    <div v-if="step == 1">
      <div
        :class="filter"
        class="upload-image"
        style="`background-image: url(${이미지}) `"
      ></div>
      <div class="filters">
        <FilterBox
          :filter="filter"
          :이미지="이미지"
          V-for="filter in 필터들"
          :key="filter"
        >
          <!-- slot - HTML도 전송 가능
          <template v-slot:a> <span>데이터1</span> </template>   -->
          <!-- slot props 사용법
          <template v-slot:default="작명"> <span>{{작명.msg}}</span> </template> -->
          <span>{{ filter }}</span>
        </FilterBox>
      </div>
    </div>

    <div v-if="step == 2">
      <div
        :class="filter"
        class="upload-image"
        style="`background-image: url(${이미지}) `"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>

    <div v-if="step == 3">
      <MyPage />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  name: "TheContainer",
  data() {
    return {
      필터들: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      filter: "",
    };
  },
  mounted() {
    this.emitter.on("filter", (a) => {
      this.filter = a;
    });
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
    MyPage,
  },
  props: {
    게시물: Array,
    step: Number,
    이미지: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
