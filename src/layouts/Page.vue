<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-black">
      <Header />
    </q-header>

    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "components/ModalHeader.vue";

export default {
  name: "MainLayout",
  components: {
    Header
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
// .q-header {
//   border-bottom: 0.1px solid grey;
// }
// .q-footer {
//   border-top: 0.1px solid grey;
// }
</style>
