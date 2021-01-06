export default {
  data() {
    return {
      x:0
    }
  },
  methods:{
    update(e){
      console.log('aaa')
      this.x = e.pageX
    }
  },
  computed:{
    double(){
      return this.x*2
    }
  },
  mounted(){
    window.addEventListener('mousemove', this.update)
  },
  destroyed(){
    window.removeEventListener('mousemove', this.update)
  }
}