<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-black" :class="scroll ? 'shadow' : 'shadow-0'">
      <Header />
    </q-header>

    <q-page-container class="">
      <q-scroll-observer @scroll="scrollPoint" />
      <router-view />
    </q-page-container>

    <q-footer class="bg-white shadow-4 text-black">
      <BottomNavigator />
    </q-footer>
  </q-layout>
</template>

<script>
import Header from "components/Header.vue";
import BottomNavigator from "components/BottomNavigator.vue";
import { scroll } from 'quasar'
const { getScrollHeight } = scroll

export default {
  name: "MainLayout",
  components: {
    Header,
    BottomNavigator
  },
  data() {
    return {
      scroll: false
    };
  },
  methods: {
    scrollPoint(val) {
      if (val.position == 0) {
        this.scroll = false
      } else {
        this.scroll = true
      }
    }
  }
};
</script>

<style lang="scss">
.q-tabs {
  padding-bottom: env(safe-area-inset-bottom);
}
.shadow {
  box-shadow: 0px 5px 10px 0.1px rgba(0,0,0,0.05), 0px -5px 10px 0.1px rgba(0,0,0,0.05), 5px 0px 10px 0.1px rgba(0,0,0,0.05), -5px 0px 10px 0.1px rgba(0,0,0,0.05);
}
// .q-header {
//   border-bottom: 0.1px solid grey;
// }
// .q-footer {
//   border-top: 0.1px solid grey;
// }
</style>
