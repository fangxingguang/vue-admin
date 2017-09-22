<template>
  <div class="layout-left" v-bind:class="{ menuOpen: !isCollapse }">
    <el-menu default-active="1-4-1" class="layout-left-menu" :collapse="isCollapse">
      <div class="menuSwitch" @click="menuSwitch">
        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    menuSwitch() {
      this.isCollapse = !this.isCollapse;
    },
  }
}
</script>

<style scoped>
.layout-left {
  width: 65px;
  height: 100%;
  float: left;
  transition: all .4s ease;
  -webkit-transition: all .4s ease;
}

.layout-left-menu {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  background-color: #eef1f6;
}

.layout-left-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.menuSwitch {
  text-align: center;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  cursor: pointer;
}

.menuOpen {
  width: 200px;
}
</style>
