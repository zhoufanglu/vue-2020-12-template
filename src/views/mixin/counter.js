export default {
  data() {
    return {
      count:1
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  mounted() {
    console.log('我是mixins-counter')
  },
  methods:{
    add(){
      this.count++
    }
  }
}