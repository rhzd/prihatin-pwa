<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script>
export default {
  name: 'index.vue',
  data () {
    return {
      items: [ {}, {}, {}, {}, {}, {}, {} ]
    }
  },

  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    }
  }
}
</script>