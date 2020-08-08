<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
body.body--dark {
  background: #1d1d1d;
}
body.body--light {
  background: #fff;
}
</style>
