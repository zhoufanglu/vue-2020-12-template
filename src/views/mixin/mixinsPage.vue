<template>
  <div id="app">
<!--    <h1>x坐标为 {{x}}</h1>-->
    <h1 @click="add">count is {{count}}, double is{{double}}</h1>
  </div>
</template>

<script>
import Counter from './counter'
import Mouse from './mouse'
export default {
  mixins:[Counter],
  data(){
    return{
      count:1,
      val:'',
    }
  },
}
</script>
