<template>
  <q-toolbar :class="this.$q.dark.isActive == true ? 'bg-dark text-white' : 'bg-white text-black'">
    <q-toolbar-title class="q-ml-sm text-weight-bolder">
      {{ this.currentRoute[0].toUpperCase() + this.currentRoute.slice(1) }}
    </q-toolbar-title>
    <q-space />
    <q-btn class="q-ml-sm" flat round dense icon="eva-message-circle-outline">
      <q-badge floating color="red">2</q-badge>
    </q-btn>
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      title: "Prihatin"
    };
  },
  methods: {},
  computed: {
    currentRoute() {
      return this.$store.state.navigation.currentRoute;
    }
  }
};
</script>

<style lang="scss"></style>
