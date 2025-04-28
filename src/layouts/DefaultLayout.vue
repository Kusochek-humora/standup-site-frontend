<script lang="ts" setup>
import FooterBlock from '@/components/FooterBlock.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
</script>

<template>
  <HeaderBlock />

  <main>
    <slot />
  </main>

  <FooterBlock />
</template>
