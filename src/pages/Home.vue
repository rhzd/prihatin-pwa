<template>
  <q-page class="flex content-start">
    <span class="text-h6 q-mt-md">Category</span>
    <q-scroll-area
      horizontal
      style="height: 130px; width: 100%;"
      class="q-mt-md"
    >
      <div class="row no-wrap" style="text-align: -webkit-center;">
        <div v-for="n in 10" :key="n" style="width: 100%;" class="q-pa-sm">
          <q-skeleton bordered type="circle" size="75px" />
          <q-skeleton bordered class="q-mt-sm" width="85px" />
        </div>
      </div>
    </q-scroll-area>
    <span class="text-h6 q-mt-lg">Latest</span>
  </q-page>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}]
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
