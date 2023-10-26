import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // 引入jsx
import Unocss from 'unocss/vite'
// 自动导入elementui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 自动导入svg图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx({
      // 配置选项
      }),
      Unocss(),
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
      host: '0.0.0.0',
      port: env.VITE_PORT,
      cors: true
    },
    base: env.VITE_PUBLIC_PATH,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    }
  }
})
