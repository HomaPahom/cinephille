<template>
  <router-link to="/" class="trailer">
    <img src="@/assets/images/arrow.svg" alt="" />
    <span> Смотреть трейлер </span>
  </router-link>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.trailer {
  background: #149a03;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  margin-top: 74px;
}
</style>