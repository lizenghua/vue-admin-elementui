<!--
 * @Author: lzh
 * @since: 2020-03-20 14:40:18
 * @lastTime: 2020-03-20 16:49:42
 * @LastAuthor: lzh
 * @message: 
 -->
<template>
  <div id="login">
    <el-button type="primary" size="medium">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background: map-get($map: $colors, $key: 'primary');
}
</style>
