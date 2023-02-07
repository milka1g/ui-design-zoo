<template>
    <div class="heder">
    <nav id="Zag" class="navbar">
      <div class="odjava">
      <router-link to="pocetna">
      <a class="nav-link" href="#">
        <img class="logo" src="../../public/img/panda.png" alt="">
      </a>
    </router-link>
      <span class="naziv" style="font-size:large">Pandica zoo</span>
    </div>
      <div class="odjava" style="align-self: center">
        <router-link style="text-decoration: none; color: inherit;" to="profil"><a id="belo" class="nav-item nav-link" href="#">
          <svg class="acc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
          </svg>
          </a>
        </router-link>
        <router-link style="text-decoration: none; color: inherit; align-self: center" to="/">
          <a class="nav-link" href="#" style="font-weight: normal; padding-right:10px; align-self: center" @click="odjavise()">Odjavi se</a>
        </router-link>
      </div>
    </nav>
    </div>
  </template>

<style>
#Zag {
  background-color: #3A3A3A;
  color: white;
  padding: 0;
}

.naziv{
  align-self:flex-end;
  padding-bottom: 5px;
}

#centriraj{
  align-self: center;
}

.acc{
  width: 35px;
  stroke:white;
  fill: white;
  margin-right: 10px;
}

.logo{
  height: 70px;
  padding-left: 10px;
}

.odjava{
  display: flex;
}

</style>

<script>
  export default {
    name: 'Zaglavlje',
    methods:{
      odjavise(){
        localStorage.clear();
        this.$router.push('/');
      }
    }
  };
</script>