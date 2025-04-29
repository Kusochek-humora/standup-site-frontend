<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { RouterLink } from 'vue-router'
import IconComponent from './UI/IconComponent.vue'
import { nextTick, onMounted, ref } from 'vue'
import BasketBtn from './UI/BasketBtn.vue'
import { onClickOutside, useTemplateRefsList } from '@vueuse/core'
const { switchLanguage, locale, t, currentLang } = useLanguage()
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'kz', label: 'KZ' },
]
const socialPlatforms = [
  {
    platform: 'instagram',
    iconName: 'inst-icon', // Иконка через IconComponent
    links: [
      {
        label: { ru: '@Instagram Клуба', kz: '@Клубтың Instagram' },
        url: 'https://instagram.com/',
      },
      { label: { ru: '@Instagram Мерч', kz: '@Мерч Instagram' }, url: 'https://instagram.com/' },
    ],
  },
  {
    platform: 'telegram',
    iconName: 'telega-icon',
    links: [{ label: { ru: '@Telegram Канал', kz: '@Telegram Арна' }, url: 'https://t.me/' }],
  },
  {
    platform: 'youtube',
    iconName: 'yt-icon',
    links: [
      {
        label: { ru: 'YouTube Клуба', kz: 'Клубтың YouTube' },
        url: 'https://www.youtube.com/@AlmatyCentralStandUpClub',
      },
      { label: { ru: '@YouTube Туров', kz: '@Турлардың YouTube' }, url: 'https://youtube.com/' },
      { label: { ru: '@Ютуб ру 3', kz: '@Ютуб кз3' }, url: 'https://youtube.com/' },
      { label: { ru: '@Ютуб ру 4', kz: '@Ютуб кз4' }, url: 'https://youtube.com/' },
    ],
  },

  {
    platform: '2gis',
    iconName: '2gis-icon',
    links: [{ label: { ru: '@Ютуб ру 4', kz: '@Ютуб кз4' }, url: 'https://youtube.com/' }],
  },

  {
    platform: 'tiktok',
    iconName: 'tiktok-icon',
    links: [{ label: { ru: '@Ютуб ру 4', kz: '@Ютуб кз4' }, url: 'https://youtube.com/' }],
  },
  {
    platform: 'wpp',
    iconName: 'wpp-icon',
    links: [{ label: { ru: '@Ютуб ру 4', kz: '@Ютуб кз4' }, url: 'https://youtube.com/' }],
  },
]
const dropdownRefs = useTemplateRefsList<HTMLElement>()
onMounted(() => {
  nextTick(() => {
    dropdownRefs.value.forEach((el, index) => {
      if (el) {
        onClickOutside(el, () => {
          if (openedPlatform.value === socialPlatforms[index].platform) {
            openedPlatform.value = null
          }
        })
      }
    })
  })
})
const openedPlatform = ref<string | null>(null)

function toggle(platform: string) {
  openedPlatform.value = openedPlatform.value === platform ? null : platform
}

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
    <div class="header__top container">
      <ul class="header__socials">
        <li
          :ref="dropdownRefs.set"
          v-for="platform in socialPlatforms"
          :key="platform.platform"
          class="header__social-item"
        >
          <button @click.stop="toggle(platform.platform)" class="header__social-icon">
            <IconComponent :name="platform.iconName" size="24px" />
          </button>

          <transition name="fade">
            <ul v-if="openedPlatform === platform.platform" class="header__social-dropdown">
              <li v-for="link in platform.links" :key="link.url">
                <a :href="link.url" target="_blank" rel="noopener noreferrer">
                  {{ link.label[currentLang] }}
                </a>
              </li>
            </ul>
          </transition>

          <!-- Если у платформы одна ссылка — сделать кнопку перехода без списка -->
        </li>
      </ul>
    </div>
    <nav class="header__container container">
      <RouterLink to="/" class="header__logo">
        <img src="../assets/images/header__logo.svg" alt="Logo" class="header__logo-img" />
      </RouterLink>

      <ul class="header__list">
        <li class="header__list-item" v-for="links in menuItems" :key="links.key">
          <RouterLink class="header__list-link" :to="links.link">{{
            t(`header.${links.key}`)
          }}</RouterLink>
        </li>
      </ul>
      <div class="header__lang lang-switcher">
        <select v-model="locale" @change="switchLanguage(locale)">
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">
            {{ lang.label }}
          </option>
        </select>
      </div>
      <BasketBtn class="header__basket" />
      <button aria-label="burger-menu" class="header__burger" type="button" @click="toggleMenu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>
  <transition name="slide">
    <div v-if="isMenuOpen" class="mobile-menu">
      <div class="mobile-menu__top">
        <RouterLink @click="toggleMenu" to="/" class="mobile-menu__logo">
          <img src="../assets/images/menu-burger__logo.svg" alt="Logo" />
        </RouterLink>
        <button @click="toggleMenu" class="mobile-menu__close"><span></span><span></span></button>
      </div>

      <ul class="mobile-menu__nav">
        <li v-for="links in menuItems" :key="links.key">
          <RouterLink :to="links.link" @click="toggleMenu">
            {{ t(`header.${links.key}`) }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </transition>
  <transition name="fade">
    <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>
  </transition>
</template>

<style scoped lang="scss">
.header {
  padding: 20px 0;
  background-color: rgba(34, 36, 69, 1);
  border-bottom: 1px solid rgba($white, $alpha: 0.3);
  &__basket {
    margin: 0 25px;
  }
  &__logo {
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
  &__burger {
    display: none;
    width: 33px;
    flex-direction: column;
    gap: 6px;
    span {
      pointer-events: none;
      height: 3px;
      background-color: $white;
      width: 100%;
    }
    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }
  &__container {
    display: flex;

    align-items: center;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-right: auto;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  &__list-item {
    list-style: none;
  }
  &__list-link {
    color: $white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  &__top {
    display: flex;
    gap: 0 30px;
    align-items: center;

    margin-bottom: 20px;
  }

  &__lang {
    display: flex;
    gap: 10px;
    cursor: pointer;

    select,
    option {
      @include transition();
    }
    select {
      color: $white;
    }
    option {
      background-color: rgba(34, 36, 69, 1);
      padding: 10px;
    }
    &:hover {
      select {
        color: $yellow;
      }
    }
  }
  &__socials {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;

    @media screen and (max-width: 1024px) {
      margin-left: 0;
      justify-content: center;
      width: 100%;
    }
  }
  &__social-item {
    position: relative;
    width: 24px;
    height: 24px;
  }
  &__social-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(34, 36, 69, 1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* лёгкая, размытая тень */
    border-radius: 8px;
    // padding: 8px;
    display: flex;
    flex-direction: column;
    // gap: 6px;
    min-width: 150px;
    border-radius: 10px;
    z-index: 2;
    overflow: hidden;
    li:hover {
      a {
        background-color: $yellow;
        color: $black;
      }
    }
    li:last-of-type {
      a {
        border: 0;
      }
    }
    a {
      display: inline-block;
      font-family: 'Oswald', sans-serif;
      font-size: 16px;
      font-weight: 400;
      padding: 10px;
      width: 100%;

      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      @include transition;
    }
  }
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); // полупрозрачный чёрный
  z-index: 900;
}

.mobile-menu {
  position: fixed;
  inset: 0;
  background: $yellow; // твой желтый
  z-index: 1000;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  transition: all cubic-bezier(0.81, 0.16, 0.41, 0.98) 0.5s;
  max-width: 500px;
  left: 100%;
  width: 100%;
  transform: translateX(-100%);
  &__close {
    display: inline-block;
    position: relative;
    width: 26px;
    height: 26px;
    span {
      position: absolute;
      pointer-events: none;
      height: 3px;
      background-color: $black;
      width: 100%;
      top: 50%;
      left: 50%;
      &:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
    background: none;
    border: none;
    cursor: pointer;
  }
  &__top {
    padding-top: 38px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    gap: 15px 0;
    li {
      padding: 5px 10px;
    }
    a {
      color: $black;
      font-size: 26px;
      text-transform: uppercase;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all cubic-bezier(0.81, 0.16, 0.41, 0.98) 0.5s;
}
.slide-enter-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
