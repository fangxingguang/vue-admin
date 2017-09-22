<template>
  <div class="layout">
    <common-header></common-header>
    <div class="layout-content">
      <common-left></common-left>
      <div class="layout-right">
        <router-view></router-view>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import commonHeader from '@/views/common/header'
import commonLeft from '@/views/common/left'
export default {
  data() {
    return {

    }
  },
  components: {
    commonHeader,
    commonLeft
  }
}
</script>

<style scoped>
.layout {
  height: 100%;
  overflow: hidden;
  min-width: 1200px;
}

.layout-content {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
}

.layout-right {
  float: left;
  padding: 10px;
}
</style>
