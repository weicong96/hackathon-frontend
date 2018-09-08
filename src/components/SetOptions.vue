<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../config';

export default {
  name: 'SetOptions',
  created(){

  },
  methods:{
  },
  data () {

    return {
      moduleIndex: this.$routeParams.moduleIndex
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
