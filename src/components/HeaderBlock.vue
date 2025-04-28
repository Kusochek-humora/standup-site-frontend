<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { switchLanguage, locale, t } = useLanguage()

const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'kz', label: 'KZ' },
]

const menuItems = [
  { key: 'poster', link: '/poster' },
  { key: 'tours', link: '/tours' },
  { key: 'kitchen', link: '/kitchen' },
  { key: 'about', link: '/about' },
  { key: 'blog', link: '/blog' },
  { key: 'merch', link: '/merch' },
  { key: 'subscription', link: '/subscription' },
  { key: 'contacts', link: '/contacts' },
]
</script>

<template>
  <header class="header">
    <nav class="header__container container">
      <ul class="header__list">
        <li class="header__list-item" v-for="links in menuItems" :key="links.key">
          <RouterLink class="header__list-link" :to="links.link">{{
            t(`header.${links.key}`)
          }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="lang-switcher">
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="switchLanguage(lang.code)"
        :class="{ active: locale === lang.code }"
      >
        {{ lang.label }}
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  a {
    color: $white;
  }
}
</style>
