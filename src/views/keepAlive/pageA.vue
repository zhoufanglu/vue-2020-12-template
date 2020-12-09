<template>
  <div class="p-father-slot">
    A
    <input type="text">
    <div style="border: solid 1px red">
      <h1>列表测试</h1>
      <ul>
        <li style="height: 30px"
            v-for="(i,index) in list"
            :key="index"
            @click="go()"
        >
          <template v-if="index===90"><span style="color: red">{{index}}</span></template>
          <template v-else>{{index}}</template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pageA',
    components: {},
    data() {
      return {
        list: [],
        curScrollTop: 0
      }
    },
    created() {
      console.log('created')
      this.list = new Array(100).fill(1)
    },
    mounted() {
      console.log('mounted')
    },
    //此钩子函数会反复触发
    activated() {
      console.log('activated', this.curScrollTop)
      document.documentElement.scrollTop = this.curScrollTop || 0
    },
    //路由离开时的钩子函数
    beforeRouteLeave (to, from, next) {
      // console.log('leave')
      this.curScrollTop = document.documentElement.scrollTop || 0
      next()
    },
    methods: {
      go() {
        this.$router.push({path:'/pageB'})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .p-name {
  }
</style>
