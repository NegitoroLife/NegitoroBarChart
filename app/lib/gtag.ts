// イベントパラメータの型を定義
interface EventParams {
  action: string
  category: string
  label?: string
  value?: number
}

// Google Analytics トラッキング ID
export const GA_TRACKING_ID = 'G-Z6XVTF1JVK'

// ページビューの送信
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// カスタムイベントの送信
export const event = ({ action, category, label, value }: EventParams) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}