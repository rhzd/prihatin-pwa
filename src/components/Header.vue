<template>
  <div :class="dark == true ? 'bg-dark text-grey' : 'bg-white text-black'">
    <q-toolbar class="row q-py-md q-px-md">
      <q-input
        standout="bg-primary text-white"
        placeholder="Search"
        class="col-12"
        dense
      >
        <template v-slot:append>
          <q-icon name="eva-search-outline" class="cursor-pointer" />
        </template>
      </q-input>
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
