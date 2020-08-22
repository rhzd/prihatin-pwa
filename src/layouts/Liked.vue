<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="">
      <router-view />
    </q-page-container>
    <q-footer class="bg-white shadow-4 text-black">
      <BottomNavigator />
    </q-footer>
  </q-layout>
</template>

<script>
import BottomNavigator from "components/BottomNavigator.vue";

export default {
  name: "LikedLayout",
  components: {
    BottomNavigator
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.q-tabs {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
