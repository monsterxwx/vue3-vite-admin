
import { setupElementIcons, setupElementPlus } from './element'
import { setupPinia } from './pinia'
import { setupEcharts } from './echarts'

export function setupPlugins (app) {
  setupElementIcons(app)
  setupElementPlus(app)
  setupPinia(app)
  setupEcharts(app)
}
