<template>
  <!--1) :class="필터 + 방식 사용 가능 => + : 문자+변수 더하고 싶으면-->
  <div
    @click="fire"
    :class="filter"
    class="filter-item"
    :style="`background-image: url(${이미지})`"
  >
    <!-- 간단한 데이터 전송시 slot, 많은 데이터 전송시 props
    <slot name="a"></slot> -->
    <slot></slot>
    <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire() {
      this.emitter.emit("filter", this.filter);
    },
  },
  props: {
    이미지: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
