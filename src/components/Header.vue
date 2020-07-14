<template>
  <q-toolbar class="bg-white text-white">
    <q-input dense disable clearable hide-bottom-space standout v-model="text">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      title: "Prihatin",
      text: "Prihatin"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.q-input {
  width: inherit;
}
</style>
