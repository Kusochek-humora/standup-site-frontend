<script lang="ts" setup>
import { ref } from 'vue'
import IconComponent from './IconComponent.vue'

const cartCount = ref(3)
</script>
<template>
  <button class="cart-btn">
    <IconComponent class="cart-svg" name="backet-icon" color="#ffffff" />
    <div class="cart-badge">
      <span v-if="cartCount > 0" class="cart-counter">{{ cartCount }}</span>
    </div>
  </button>
</template>
<style scoped lang="scss">
.cart-btn {
  position: relative;
}
.cart-svg {
  fill: $white;
  transition: 0.3s all;

  :deep(path) {
    fill: $yellow;
    transition: 0.3s all;
  }
}

.cart-badge {
  top: 0;
  right: 0;
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: red;
}
.cart-counter {
  position: absolute;
  @include absolute-center;
  font-size: 11px;
  color: $white;
}
</style>
