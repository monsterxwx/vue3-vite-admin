import copy from './modules/copy'
import waterMarker from './modules/waterMarker'
import draggable from './modules/draggable'
import debounce from './modules/debounce'
import throttle from './modules/throttle'
import longpress from './modules/longpress'
import waves from './modules/waves/waves'

const directivesList = {
  // Custom directives
  copy,
  waterMarker,
  draggable,
  debounce,
  throttle,
  longpress,
  waves
}

const directives = {
  install: function (app) {
    Object.keys(directivesList).forEach(key => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key])
    })
  }
}

export default directives
