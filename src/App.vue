<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
   <!-- <keep-alive>
      <router-view/>
    </keep-alive>-->
    <!--<vue-page-stack>
      <router-view :key="$route.fullPath"></router-view>
    </vue-page-stack>-->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'forward'
      };
    },
    components: {},
    created() {},
    watch: {/*
      $route(to, from) {
        if (to.params['stack-key-dir'] === 'forward') {
          this.transitionName = 'forward';
        } else {
          this.transitionName = 'back';
        }
      }*/
    },
    methods: {}
  };
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>export default {
  components: {}
}
</script>