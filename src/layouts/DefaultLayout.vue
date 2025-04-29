<script lang="ts" setup>
import FooterBlock from '@/components/FooterBlock.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
</script>

<template>
  <HeaderBlock />

  <main class="main-content">
    <slot />
  </main>

  <FooterBlock />
</template>
<style scoped lang="scss">
.main-content {
  flex-grow: 1;
}
</style>
