<template>
  <div class="p-name">b
    <input type="text">
    <button @click="$router.push({path:'/pageA'})">goA</button>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {

      }
    },
    created() {
      console.log('b created')
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
