<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-white text-black">
      <Header />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-white text-black">
      <BottomNavigator />
    </q-footer>
  </q-layout>
</template>

<script>
import Header from "components/Header.vue";
import BottomNavigator from "components/BottomNavigator.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    BottomNavigator
  },
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
.q-header {
    border-bottom: 0.1px solid black;
}
.q-footer {
    border-top: 0.1px solid black;
}
</style>
