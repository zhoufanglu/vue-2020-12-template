<template>
  <div class="p-carousel">
    <carousel-3d>
      <slide :index="0">
        Slide 1 Content
      </slide>
      <slide :index="1">
        Slide 2 Content
      </slide>
      <slide :index="2">
        Slide 3 Content
      </slide>
    </carousel-3d>
  </div>
</template>
<script>

import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: '',
  components: {
    Carousel3d,
    Slide
  },
  directives: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-swiper {
  height: 200px;
  border: solid 1px red;
}
</style>
