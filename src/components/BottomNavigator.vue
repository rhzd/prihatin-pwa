<template>
  <q-tabs
    v-model="tab"
    align="justify"
    active-color="primary"
    indicator-color="transparent"
    class="mobile-only"
    :class="dark == true ? 'bg-lightdark text-grey' : 'bg-white text-black'"
  >
    <q-route-tab
      :ripple="false"
      name="home"
      :icon="this.tab !== 'home' ? 'eva-home-outline' : 'eva-home'"
      to="/"
      exact
    />
    <!-- <q-route-tab
      :ripple="false"
      name="search"
      :icon="this.tab !== 'search' ? 'eva-search-outline' : 'eva-search'"
      to="/search"
      exact
    /> -->
    <!-- <q-route-tab
      :ripple="false"
      name="post"
      :icon="
        this.tab !== 'post' ? 'eva-plus-circle-outline' : 'eva-plus-circle'
      "
      to="/post"
      exact
    /> -->
    <q-route-tab
      :ripple="false"
      name="liked"
      :icon="this.tab !== 'liked' ? 'eva-heart-outline' : 'eva-heart'"
      to="/liked"
      exact
    >
    </q-route-tab>
    <q-route-tab
      :ripple="false"
      name="profile"
      :icon="this.tab !== 'profile' ? 'eva-person-outline' : 'eva-person'"
      to="/profile"
      exact
    >
    </q-route-tab>
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

  mounted() {
    this.dark = this.$q.dark.isActive
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
  background-color: #1F1F1F;
}
</style>
