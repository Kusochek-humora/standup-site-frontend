import { createI18n } from 'vue-i18n'
import ru from '@/locales/ru.json'
import kz from '@/locales/kz.json'

export const savedLocale = localStorage.getItem('locale') || 'ru'
export const i18n = createI18n({
  legacy: false, // ОЧЕНЬ важно для <script setup>
  globalInjection: true, // чтобы $t работал без import
  locale: savedLocale, // Ставим сохранённый язык
  fallbackLocale: 'ru',
  messages: {
    ru,
    kz,
  },
})
