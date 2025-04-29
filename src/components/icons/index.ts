import BasketIcon from './BasketIcon.vue'
import InstIcon from './InstIcon.vue'
import TelegramIcon from './TelegramIcon.vue'
import TiktkokIcon from './TiktkokIcon.vue'
import TwoGIsIcon from './TwoGIsIcon.vue'
import WppIcon from './WppIcon.vue'
import YoutubeIcon from './YoutubeIcon.vue'

export const icons = {
  'wpp-icon': WppIcon,
  'yt-icon': YoutubeIcon,
  '2gis-icon': TwoGIsIcon,
  'tiktok-icon': TiktkokIcon,
  'telega-icon': TelegramIcon,
  'inst-icon': InstIcon,
  'backet-icon': BasketIcon,
} as const

export type IconName = keyof typeof icons
export type IconComponent = (typeof icons)[IconName]
export type IconProps = {
  name: IconName | (string & {})
  size?: string
  color?: string
  class?: string
  style?: string
}
