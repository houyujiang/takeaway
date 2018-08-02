import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

// 添加 config json
export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-row': '../../static/dist/row/index',
      'i-col': '../../static/dist/col/index',
      'i-button': '../../static/dist/button/index',
      'i-input': '../../static/dist/input/index',
      'i-tab-bar': '../../static/dist/tab-bar/index',
      'i-tab-bar-item': '../../static/dist/tab-bar-item/index',
      'i-divider': '../../static/dist/divider/index'
    }
  }
}
