import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // 引入jsx
import Unocss from 'unocss/vite'
import { presetMini, presetAttributify, presetIcons } from 'unocss'
// 自动导入elementui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 自动导入svg图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
    // 配置选项
    }),
    Unocss({
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
        })],
        [
          'flex-center',
          {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
          }
        ],
        [
          'flex-between',
          {
            display: 'flex',
            'justify-content': 'space-between',
            'align-items': 'center'
          }
        ],
        [
          'flex-around',
          {
            display: 'flex',
            'justify-content': 'space-around',
            'align-items': 'center'
          }
        ],
        [
          'flex-align-center',
          {
            display: 'flex',
            'align-items': 'center'
          }
        ]
      ]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
