export const GA_TRACKING_ID = 'G-Z6XVTF1JVK'

// ページビューの送信
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// カスタムイベントの送信
export const event = ({ action, category, label, value }: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}