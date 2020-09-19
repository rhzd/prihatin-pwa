<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="">
      <q-scroll-observer @scroll="scrollPoint" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { scroll } from "quasar";
const { getScrollHeight } = scroll;

export default {
  name: "ProductPage",
  components: {},
  data() {
    return {
      scroll: false
    };
  },
  methods: {
    scrollPoint(val) {
      if (val.position == 0) {
        this.scroll = false;
      } else {
        this.scroll = true;
      }
    }
  }
};
</script>

<style lang="scss">
.q-tabs {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
