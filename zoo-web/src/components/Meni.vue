<template>
    <nav id="meni" class="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/pocetna"><a id="belo" class="nav-item nav-link" href="#">Pocetna</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/paketi"><a id="belo" class="nav-item nav-link" href="#">Paketi</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/obavestenja"><a id="belo" class="nav-item nav-link" href="#">Obavestenja</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/desavanja"><a id="belo" class="nav-item nav-link" href="#">Desavanja</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/zivotinje"><a id="belo" class="nav-item nav-link" href="#">Zivotinje</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/kontakt"><a id="belo" class="nav-item nav-link" href="#">Kontakt</a></router-link>
          </div>
          <div style="padding-right:5px">
            <router-link id="razmak" style="font-weight: normal; text-decoration: none;" to="/ulaznice"><a class="btn spec" style="background-color:#E0CA3C">Ulaznice</a></router-link>
          </div>
      </div>
    </nav>
  </template>

<style>

#meni{
  background-color: #252525;
  color: white;
}

#belo{
  color: white;
}

#razmak{
  padding-left: 12px;
  padding-right: 12px;
}

.spec{
  color: #252525  !important;
}

.router-link-exact-active a{
  color: #048A81 !important;
}

#navbarNav{
  justify-content: space-between;
}
</style>

<script>
  export default {
    name: 'Meni',
    methods:{
      // reroute(rut){
      //   alert(rut)
      //   this.$router.push(rut);
      // }
    }
  };
</script>