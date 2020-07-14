<template>
  <q-tabs
    v-model="tab"
    narrow-indicator
    switch-indicator
    align="justify"
    class="mobile-only"
  >
    <q-route-tab :ripple="false" name="home" icon="home" to="/" exact />
    <q-route-tab :ripple="false" name="home" icon="camera" to="/post" exact />
    <q-route-tab :ripple="false" name="home" icon="love" to="/liked" exact />
  </q-tabs>
</template>

<script>
export default {
  data() {
    return {
      tab: "mails"
    };
  }
};
</script>

<style lang="scss">
.q-tabs {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
