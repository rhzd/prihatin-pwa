<template>
  <div class="">
    <div class="">
      <q-carousel animated infinite v-model="name"  @click="fullscreen = !fullscreen" :fullscreen.sync="fullscreen" class="q-mb-md" swipeable>
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />

        <template v-slot:control>
          <q-carousel-control position="bottom-right">
            <q-chip square>{{ name }} / 4</q-chip>
          </q-carousel-control>
          <q-carousel-control position="top-left">
            <q-btn
              round
              dense
              :color="dark == true ? 'dark text-white' : 'white text-black'"
              v-go-back.single
              icon="eva-arrow-back-outline"
            />
          </q-carousel-control>
          <q-carousel-control position="top-right">
            <q-btn
              round
              dense
              :color="dark == true ? 'dark text-white' : 'white text-black'"
              icon="eva-share-outline"
              class="q-mx-md"
            />
            <q-btn
              round
              dense
              :color="dark == true ? 'dark text-white' : 'white text-black'"
              icon="eva-heart-outline"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
      <div class="column q-pa-md">
        <span style="font-size: 26px" class="text-weight-regular"
          >Item Name</span
        >
        <span style="font-size: 13px" class="text-weight-light">Location</span>
        <q-separator color="grey" class="q-my-lg" />
        <span style="font-size: 13px" class="text-weight-light"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          maximus lectus, ornare vulputate justo. In quis nibh velit. Nullam
          enim erat, convallis nec elit vitae, vestibulum pretium quam. Donec et
          efficitur erat, in convallis ligula. Praesent elit ligula, accumsan
          sit amet consectetur in, aliquam a purus. Aenean lobortis, dui quis
          iaculis tempus, mauris felis sollicitudin ante, eget maximus eros
          lacus in tellus. Integer blandit porta varius. Sed vulputate tellus
          orci, quis efficitur ipsum maximus non. Mauris suscipit nisl pulvinar
          maximus placerat.</span
        >
        <q-separator color="grey" class="q-my-lg" />

        <q-item>
          <q-item-section side>
            <q-avatar rounded size="48px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Name</q-item-label>
            <q-item-label caption>Location</q-item-label>
          </q-item-section>
          <q-item-section side>
            3 min ago
          </q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productMain",
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}],
      dark: null,
      name: 1,
      fullscreen: false
    };
  },

  beforeMount() {
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

.q-item
  padding: 0px
</style>
