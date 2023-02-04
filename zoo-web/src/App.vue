<template>
  <div id="app">
    <PrijavaZaglavlje></PrijavaZaglavlje>
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'lilita';
    src: url('./fonts/LilitaOne-Regular.ttf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'lilita';
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  import Zaglavlje from './components/Zaglavlje.vue'
  import Meni from './components/Meni.vue'
  import PrijavaZaglavlje from './components/PrijavaZaglavlje.vue';

  export default{
    name: 'App',
    components:{
      Zaglavlje,
      Meni,
      PrijavaZaglavlje
    }
  }
</script>