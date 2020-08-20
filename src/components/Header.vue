<template>
  <div class="bg-white text-primary">
    <q-toolbar class="row q-py-md q-px-md">
      <q-input
        standout="bg-primary text-white"
        placeholder="Search"
        class="col-11 q-pr-sm"
        dense
      >
        <template v-slot:append>
          <q-icon name="eva-search-outline" class="cursor-pointer" />
        </template>
      </q-input>
      <div class="col-1 text-right">
        <q-btn flat round dense class="" icon="eva-message-circle-outline" />
      </div>
    </q-toolbar>
  </div>
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
