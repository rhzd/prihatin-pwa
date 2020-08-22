<template>
  <q-page>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div class="row">
        <div class="col-12 q-pt-md">
          <span class="text-h6 text-weight-bold q-pl-md">Categories</span>
        </div>
        <div class="col-12">
          <q-scroll-area
            horizontal
            style="height: 130px; width: 100%;"
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
          >
            <div class="row no-wrap q-px-sm q-pt-sm">
              <div v-for="n in 10" :key="n" class="q-pa-sm text-center">
                <!-- <q-btn class="shadow-box" icon="eva-message-circle-outline" /> -->
                <!-- <q-skeleton bordered type="circle" size="55px" /> -->
                <div v-if="dark === true" class="shadow-box-dark q-mb-md"></div>
                <div v-else class="shadow-box-light q-mb-md"></div>
                <span class="text-caption text-weight-medium">Item{{ n }}</span>
              </div>
            </div>
          </q-scroll-area>
        </div>
        <div class="col-6 q-pt-xl">
          <span style="font-size: 20px" class="text-weight-bold q-pl-md"
            >Most Viewed</span
          >
        </div>
        <div style="align-self: center;" class="col-6 text-right q-pt-xl">
          <span style="font-size: 16px;" class="text-weight-medium q-pr-md"
            >See all</span
          >
        </div>
        <div class="col-12 q-px-md">
          <div class="row">
            <div class="col-6 q-pt-md q-pr-sm">
              <div class="row">
                <div class="item-box">
                  <img
                    class="item-box"
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                  />
                </div>
                <span style="font-size: 18px" class="col-12 text-weight-bold"
                  >Normal Item</span
                >
                <span class="col-12 text-caption"
                  >This is some description.</span
                >
                <span style="font-size: 22px; color: #FF4081" class="col-12"
                  >RM0</span
                >
              </div>
            </div>
            <div class="col-6 q-pt-md q-pl-sm">
              <div class="row">
                <div class="item-box">
                  <img
                    class="item-box"
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                  />
                </div>
                <span style="font-size: 18px" class="col-12 text-weight-bold"
                  >Normal Item</span
                >
                <span class="col-12 text-caption"
                  >This is some description.</span
                >
                <span style="font-size: 22px; color: #FF4081" class="col-12"
                  >RM0</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 q-pt-xl">
          <span style="font-size: 20px" class="text-weight-bold q-pl-md"
            >Recently Added</span
          >
        </div>
        <div class="col-12 q-px-sm">
          <div class="row">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="col-6 q-pt-md q-px-sm"
            >
              <div class="row">
                <div class="item-box">
                  <img
                    class="item-box"
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                  />
                </div>
                <span style="font-size: 18px" class="col-12 text-weight-bold"
                  >Normal Item {{ index }}</span
                >
                <span class="col-12 text-caption"
                  >This is some description.</span
                >
                <span style="font-size: 22px; color: #FF4081" class="col-12"
                  >RM{{ index }}0</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      items: [{}, {}, {}, {}],
      thumbStyle: {
        height: "0px",
        opacity: 0.0
      },
      barStyle: {
        height: "0px",
        opacity: 0.0
      },
      dark: null
    };
  },
  beforeMount() {
    this.dark = this.$q.dark.isActive;
  },

  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {});
          done();
        }
      }, 1000);
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
.shadow-box-light
  width: 65px
  height: 65px
  border-radius: 50%
  font-size: 15px
  box-shadow: 0px 5px 10px 0.1px rgba(0,0,0,0.05), 0px -5px 10px 0.1px rgba(0,0,0,0.05), 5px 0px 10px 0.1px rgba(0,0,0,0.05), -5px 0px 10px 0.1px rgba(0,0,0,0.05);

.shadow-box-dark
  width: 65px
  height: 65px
  border-radius: 50%
  font-size: 15px
  background-color: rgba(32,32,32,1)

.item-box
  width: 100%
  height: 240px
  font-size: 15px
  background-color: #1F1F1F
</style>
