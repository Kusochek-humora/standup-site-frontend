import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
export type AppLocale = 'ru' | 'kz'
export function useLanguage() {
  const { locale, t } = useI18n() //

  const currentLang = computed<AppLocale>(() => locale.value as AppLocale)

  function switchLanguage(code: string) {
    locale.value = code
    localStorage.setItem('locale', code)
    document.documentElement.lang = code
  }

  return {
    currentLang,
    locale,
    switchLanguage,
    t
  }
}
