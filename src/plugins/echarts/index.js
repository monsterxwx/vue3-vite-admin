import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart, RadarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, BarChart, PieChart, RadarChart, GridComponent, TooltipComponent])

export function setupEcharts (app) {
  app.component('VChart', ECharts)
}
