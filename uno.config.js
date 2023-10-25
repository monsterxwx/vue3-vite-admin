import { presetMini, presetAttributify, presetIcons, defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetMini(), presetIcons()],
  rules: [
    [
      'base',
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        'flex-direction': 'column'
      }
    ],
    [
      'ellipsis',
      {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap'
      }
    ],
    [/^ellipsis-(\d+)$/, ([, d]) => ({
      'word-break': 'break-all',
      'text-overflow': 'ellipsis',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': d,
      overflow: 'hidden'
    })]
  ]
})
