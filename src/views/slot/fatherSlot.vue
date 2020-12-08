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
      <h1>列表测试</h1>
      <ul>
        <input type="text" value="">
        <li style="height: 30px"
            v-for="(i,index) in list"
            :key="index"
            @click="go()"
        >
          {{index}}
        </li>
      </ul>
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
        list: []
      }
    },
    created() {
      this.list = new Array(100).fill(1)
      console.log(31,this.list)
    },
    mounted() {

    },
    methods: {
      go() {
        console.log(document.documentElement.scrollTop)
        localStorage.setItem("scroll", document.documentElement.scrollTop)
        this.$router.push({path: '/'})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .p-name {
  }
</style>
