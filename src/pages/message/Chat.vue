<template>
  <div class="q-pa-md row">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`doing fine, how r you?`]"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`doing fine, how r you?`]"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`doing fine, how r you?`]"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`doing fine, how r you?`]"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`doing fine, how r you?`]"
        stamp="4 minutes ago"
      />
    </div>
    <q-footer
      class="q-px-md shadow-4"
      :class="[
        dark === true ? 'bg-lightdark' : 'bg-white',
        focus === true ? '' : 'padding-bottom'
      ]"
    >
      <q-input
        class="q-my-sm"
        rounded
        standout
        @focus="focusMethod"
        @blur="blurMethod"
        v-model="text"
        :dense="dense"
      >
        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="eva-close-outline"
            @click="text = ''"
            class="cursor-pointer"
          />
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="eva-corner-right-up-outline" />
        </template>
      </q-input>
    </q-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      ph: "",
      dense: true,
      dark: null,
      focus: false
    };
  },
  beforeMount() {
    this.dark = this.$q.dark.isActive;
  },
  methods: {
    focusMethod(val) {
      if (val.type == "focusin") {
        this.focus = true;
      }
    },
    blurMethod(val) {
      if (val.type == "focusout") {
        this.focus = false;
      }
    }
  },
  watch: {
    "$q.dark.isActive"(val) {
      this.dark = val;
    }
  }
};
</script>

<style lang="scss">
.padding-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
// .q-header {
//   border-bottom: 0.1px solid grey;
// }
// .q-footer {
//   border-top: 0.1px solid grey;
// }
</style>
