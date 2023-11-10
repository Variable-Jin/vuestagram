<template>
  <!--1) :class="필터 + 방식 사용 가능 => + : 문자+변수 더하고 싶으면-->
  <div
    :class="필터"
    class="filter-item"
    :style="`background-image: url(${이미지})`"
  ></div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    이미지: String,
    필터: String,
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
