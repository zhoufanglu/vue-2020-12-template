<template>
  <div class="p-child-slot">
    我是子组件的内容
   <slot name="fatherContentA" :childVal="childVal"></slot>
   <slot name="fatherContentB"></slot>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        childVal: 100
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .p-name {
  }
</style>
