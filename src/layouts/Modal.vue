<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="bg-white text-black"
      :class="scroll ? 'shadow' : 'shadow-0'"
    >
      <Header />
    </q-header>
    <q-page-container class="">
      <q-scroll-observer @scroll="scrollPoint" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "components/ModalHeader.vue";
import { scroll } from "quasar";
const { getScrollHeight } = scroll;

export default {
  name: "ModalPage",
  components: {
    Header
  },
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
