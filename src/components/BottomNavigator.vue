<template>
  <q-tabs
    v-model="tab"
    align="justify"
    active-color="primary"
    indicator-color="transparent"
    class="mobile-only"
    :class="this.$q.dark.isActive == true ? 'bg-dark text-grey' : 'bg-white text-black'"
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
      to="/liked"
      exact
    >
    </q-route-tab>
  </q-tabs>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  mounted() {},

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
    }
  }
};
</script>

<style lang="scss">
.q-tabs {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
