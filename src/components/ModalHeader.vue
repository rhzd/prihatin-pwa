<template>
  <div :class="dark == true ? 'bg-dark text-grey' : 'bg-white text-black'">
    <q-toolbar class="row q-py-md q-px-md">
      <div class="col-1 text-right">
        <q-btn flat round dense class="" v-go-back.single icon="eva-arrow-back-outline" />
      </div>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "FreeJe",
      dark: null
    };
  },
  beforeMount() {
    this.dark = this.$q.dark.isActive;
  },
  methods: {},
  computed: {
    currentRoute() {
      return this.$store.state.navigation.currentRoute;
    }
  },
  watch: {
    "$q.dark.isActive"(val) {
      this.dark = val;
    }
  }
};
</script>

<style lang="scss"></style>
