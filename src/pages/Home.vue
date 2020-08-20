<template>
  <q-page>
    <div class="row">
      <div class="col-12 q-pt-md">
        <span class="text-h6 text-weight-bold q-pl-md">Categories</span>
      </div>
      <div class="col-12">
        <q-scroll-area
          horizontal
          style="height: 120px; width: 100%;"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
        >
          <div class="row no-wrap q-px-sm q-pt-sm">
            <div v-for="n in 10" :key="n" class="q-pa-sm text-center">
              <!-- <q-btn class="shadow-box" icon="eva-message-circle-outline" /> -->
              <!-- <q-skeleton bordered type="circle" size="55px" /> -->
              <div class="shadow-box q-mb-md"></div>
              <span class="text-caption text-weight-medium">Item{{ n }}</span>
            </div>
          </div>
        </q-scroll-area>
      </div>
      <div class="col-6 q-pt-xl">
        <span style="font-size: 20px" class="text-weight-bold q-pl-md"
          >Recently Added</span
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
              <div class="item-box"></div>
              <span style="font-size: 18px" class="col-12 text-weight-bold"
                >Normal Item</span
              >
              <span class="col-12 text-caption">This is some description.</span>
              <span style="font-size: 22px; color: #FF4081" class="col-12"
                >RM0</span
              >
            </div>
          </div>
          <div class="col-6 q-pt-md q-pl-sm">
            <div class="row">
              <div class="item-box"></div>
              <span style="font-size: 18px" class="col-12 text-weight-bold"
                >Normal Item</span
              >
              <span class="col-12 text-caption">This is some description.</span>
              <span style="font-size: 22px; color: #FF4081" class="col-12"
                >RM0</span
              >
            </div>
          </div>
        </div>
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
              <div class="item-box"></div>
              <span style="font-size: 18px" class="col-12 text-weight-bold"
                >Normal Item</span
              >
              <span class="col-12 text-caption">This is some description.</span>
              <span style="font-size: 22px; color: #FF4081" class="col-12"
                >RM0</span
              >
            </div>
          </div>
          <div class="col-6 q-pt-md q-pl-sm">
            <div class="row">
              <div class="item-box"></div>
              <span style="font-size: 18px" class="col-12 text-weight-bold"
                >Normal Item</span
              >
              <span class="col-12 text-caption">This is some description.</span>
              <span style="font-size: 22px; color: #FF4081" class="col-12"
                >RM0</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      items: [
        {
          name: ""
        },
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      thumbStyle: {
        height: "0px",
        opacity: 0.0
      },

      barStyle: {
        height: "0px",
        opacity: 0.0
      }
    };
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
  }
};
</script>

<style lang="sass" scoped>
.shadow-box
  width: 65px
  height: 65px
  border-radius: 50%
  font-size: 15px
  box-shadow: 0px 5px 10px 0.1px rgba(0,0,0,0.05), 0px -5px 10px 0.1px rgba(0,0,0,0.05), 5px 0px 10px 0.1px rgba(0,0,0,0.05), -5px 0px 10px 0.1px rgba(0,0,0,0.05);

.item-box
  width: 100%
  height: 240px
  font-size: 15px
  background-color: lightblue
</style>
