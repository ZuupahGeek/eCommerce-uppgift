<template>
  <div id="app">
      <navbar />
   <router-view/>
    </div>
   
</template>

<script>
import { mapActions} from 'vuex'
import Navbar from './components/navigation/Navbar.vue'


export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  computed: {
  },
  created() {
    this.checkUser()
  }
 
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body, html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
}
a {
  text-decoration: none;
  color: #000;
}
.container {
  max-width: 80%;
  margin: auto;
}
.bg-white {
  background-color: #efd78d;
}
.bg-orange {
  background-color: #e97e2e;
}
.bg-grey {
  background-color: #898886;
}
.bg-brown {
  background-color: #874338;
}
.d-flex{
  display: flex;
}

</style>
