<script setup lang="ts"></script>
<template>
  <RouterLink to="/" class="logo">
    <img src="../../assets/images/header__logo.svg" alt="Logo" class="logo-img" />
  </RouterLink>
</template>
<style scoped lang="scss">
.logo {
  width: 111px;
  height: 54px;
  position: relative;
  display: inline-block;
  margin-right: auto;
  &-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
  }

  // @media screen and (max-width: 1024px) {
  // }
}
</style>
