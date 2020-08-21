<template>
  <div class="q-pa-md">
    <span style="font-size: 26px" class="text-weight-bold">Liked</span>
    <div class="row justify-center q-gutter-sm q-pt-md">
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="col-12 example-item"
      >
        <q-card
          class="q-ma-sm"
          :class="dark === true ? 'shadow-box-dark' : 'shadow-box-light'"
        >
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">Item {{ index }}</div>
            <div class="col-12 text-caption">This is some description.</div>
            <div style="font-size: 22px; color: #FF4081" class="col-12">
              RM{{ index }}0
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}],
      dark: null
    };
  },

  mounted() {
    this.dark = this.$q.dark.isActive;
  },

  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {});
          done();
        }
      }, 2000);
    }
  },

  watch: {
    "$q.dark.isActive"(val) {
      this.dark = val;
    }
  }
};
</script>

<style lang="sass" scoped>
.example-item
  height: 380px

.shadow-box-light
  box-shadow: 0px 5px 10px 0.1px rgba(0,0,0,0.05), 0px -5px 10px 0.1px rgba(0,0,0,0.05), 5px 0px 10px 0.1px rgba(0,0,0,0.05), -5px 0px 10px 0.1px rgba(0,0,0,0.05);

.shadow-box-dark
  background-color: rgba(32,32,32,1)
</style>
