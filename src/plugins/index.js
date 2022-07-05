
import { setupElementIcons } from './element'
import { setupPinia } from './pinia'
// import { setupEcharts } from "./echarts";

export function setupPlugins (app) {
  setupElementIcons(app)
  setupPinia(app)
  // setupEcharts(app)
}
