<template>
  <div>
    Create a new project<br>

    <label>Project Name: </label>
    <input type='text' v-model='name'/>
    <button type='button' v-for='(module,index) in modulesLoaded' @click='addModule(index)'> {{ module.name}}</button>
    <button type='submit' value='Submit' @click='submitProject()'>Submit</button>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../config';

export default {
  name: 'LandingPage',
  created(){

  },
  methods:{
    addModule(index){
      this.modules.push(this.modulesLoaded[index])
    },
    submitProject(){
      axios.post(config.apiAddress+'/project',{
        name : this.name,
        modules: this.modules
      }).then((response)=>{
        var responseData = response.data;

        this.$router.push({
          name: 'SetOptions',
          params: {
            projectId: responseData['id']
          }
        })
      }).catch((err)=>{

      })
    }
  },
  data () {
    axios.get(config.apiAddress + '/modules').then((response)=>{
      this.modulesLoaded = response.data;
    }).catch((err)=>{

    })
    return {
      name: '',
      modulesLoaded: [],
      modules: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
