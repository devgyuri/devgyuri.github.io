<template>
  <!-- 인트로 페이지 -->
  <main v-if="page === 0">
    <img src="/tree3.jpg" alt="나무사진">
    <h1>나와 닮은 나무 찾기</h1>
    <h2>나는 어떤 나무를 닮았을까요?</h2>
    <Button text="테스트 시작하기" :clickEvent="startTest" />
  </main>
  <!-- 질문 페이지 -->
  <main v-else-if="page < 5">
    <Question />
  </main>
  <!-- 결과 페이지 -->
  
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page;
    }
  },
  methods: {
    startTest() {
      this.$store.commit("SET_PAGE", 1);
    }
  }
}
</script>

<style>

</style>
