<template>
  <div class="p-father-slot">
    fatherSlot
    <h1>下面是插槽内容</h1>
    <div style="border: solid 1px red">
      <childSlot>
        <template v-slot:fatherContentA="childValObj"><!--这里childValObj只是一个变量名,随便命名-->
          我是父组件内容A {{childValObj}}<!--输出{childVal:100}-->
        </template>
        <template v-slot:fatherContentB>
          我是父组件内容B
        </template>
      </childSlot>
    </div>
  </div>
</template>
<script>
  import childSlot from "./childSlot";
  export default {
    name: '',
    components: {childSlot},
    data() {
      return {
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
