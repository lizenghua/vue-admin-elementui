/*
 * @Author: lzh
 * @since: 2020-03-20 10:18:38
 * @lastTime: 2020-03-20 17:04:39
 * @LastAuthor: lzh
 * @message: element-ui 组件引入
 */
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Loading, MessageBox, Message, Button, ButtonGroup } from 'element-ui'

Vue.use(Loading.directive)
  .use(Button)
  .use(ButtonGroup)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message
