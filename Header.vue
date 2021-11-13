<template>
  <div>
    <h1>oneM2M-Vue Application</h1>
    <el-menu
      mode="horizontal"
      default-active="2"
      class="nav"
      background-color="#3b4346"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="3">
        <!-- <i class="el-icon-menu"></i> -->
        <router-link to="/create" style="font-size:1.5em">Create Resource</router-link>
      </el-menu-item>

      <el-menu-item aria-hidden="true" />

      <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <router-link to="/retrieve" style="font-size:1.5em">Retrieve Resource</router-link>
      </el-menu-item>

      <el-menu-item aria-hidden="true" />

      <el-menu-item index="5">
        <!-- <i class="el-icon-menu"></i> -->
        <router-link to="/monitoring" style="font-size:1.5em">Monitoring</router-link>
      </el-menu-item>

      <el-menu-item aria-hidden="true" />

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

h1 {
  position: absolute;
  bottom: 35px;
  left: 3%;
  font-size: 3em;
}

.nav {
  position: absolute;
  right: 0;
  bottom: 35px;
  font-size: 2.25em;
  margin-right: 20px;
}
</style>