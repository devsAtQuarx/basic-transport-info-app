<template>
  <div>

  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      goTobus(){
        localStorage.setItem('from_city',JSON.stringify(this.$store.state.from_city))
        localStorage.setItem('to_city',JSON.stringify(this.$store.state.to_city))
        this.$router.push('/bus')
      }
    },
    beforeMount(){
      this.goTobus()
    }
  }
</script>

<style scoped>
</style>
