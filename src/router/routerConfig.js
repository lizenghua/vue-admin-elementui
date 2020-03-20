/*
 * @Author: lzh
 * @since: 2020-03-20 12:13:11
 * @lastTime: 2020-03-20 14:40:05
 * @LastAuthor: lzh
 * @message: 路由配置
 */
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@views/Login/index.vue')
  }
]

export { routes }
