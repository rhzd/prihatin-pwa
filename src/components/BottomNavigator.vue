<template>
  <q-tabs
    v-model="tab"
    align="justify"
    no-caps
    active-color="primary"
    indicator-color="transparent"
    dense
    class="mobile-only q-pt-xs"
    :class="dark == true ? 'bg-lightdark text-grey' : 'bg-white text-black'"
  >
    <q-route-tab
      :ripple="false"
      name="home"
      label="Explore"
      :icon="this.tab !== 'home' ? 'eva-home' : 'eva-home'"
      to="/"
      exact
    />
    <q-route-tab
      :ripple="false"
      name="liked"
      label="Liked"
      :icon="this.tab !== 'liked' ? 'eva-heart' : 'eva-heart'"
      to="/liked"
      exact
    />
    <!-- <q-route-tab
      :ripple="false"
      name="search"
      label="Post"
      :icon="this.tab !== 'search' ? 'eva-search-outline' : 'eva-search'"
      to="/search"
      exact
    /> -->
    <q-route-tab
      :ripple="false"
      name="message"
      label="Chat"
      :icon="
        this.tab !== 'message'
          ? 'eva-message-circle'
          : 'eva-message-circle'
      "
      to="/message"
      exact
    />
    <q-route-tab
      :ripple="false"
      name="profile"
      label="Profile"
      :icon="
        this.tab !== 'profile' ? 'eva-person' : 'eva-person'
      "
      to="/profile"
      exact
    />
  </q-tabs>
</template>

<script>
export default {
  data() {
    return {
      dark: null
    };
  },

  created() {},

  beforeMount() {
    this.dark = this.$q.dark.isActive;
  },

  computed: {
    tab: {
      get() {
        return this.$store.state.navigation.currentRoute;
      },
      set(val) {
        this.$store.commit("navigation/updateCurrentRoute", val);
      }
    }
  },

  watch: {
    tab(val) {
      store.dispatch({
        currentRoute: val
      });
    },
    "$q.dark.isActive"(val) {
      this.dark = val;
    }
  }
};
</script>

<style lang="scss">
.q-tabs {
  padding-bottom: env(safe-area-inset-bottom);
}
.bg-lightdark {
  background-color: #1f1f1f;
}

.q-tab__label {
  font-size: 12px;
  line-height: 1.75em;
  font-weight: 500;
}
</style>
