<template>
  <div class="layout-header">
    <div class="layout-menu">
      <div class="left">
        <a href="#" class="logo"><img src="~@/assets/images/logo.png" /></a>
      </div>
      <div class="left">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">导航一</el-menu-item>
          <el-submenu index="2">
            <template slot="title">导航二</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">导航三</el-menu-item>
          <el-menu-item index="4">导航四</el-menu-item>
          <el-menu-item index="5">导航五</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <ul class="header-right list">
          <li>
            <el-dropdown menu-align="start" class="pointer">
              <span class="el-dropdown-link">
                下拉菜单
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>用户中心</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-button type="warning" size="small">警告按钮</el-button>
          </li>
          <li>
            <el-button type="primary">主要按钮</el-button>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.layout-header {
  position: fixed;
  width: 100%;
  background-color: rgb(50, 65, 87);
  z-index: 101;
}

.layout-menu {
  min-width: 990px;
}

.logo {
  height: 45px;
  padding: 10px 30px 0 10px;
  display: block;
}

.logo img {
  height: 40px;
}

.header-right {
  height: 60px;
  line-height: 60px;
  float: right;
}

.header-right li {
  float: left;
  margin: 0 20px;
}
</style>
