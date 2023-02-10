<template>
    <nav id="meni" class="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/adminpocetna"><a id="belo" class="nav-item nav-link" href="#">Pocetna</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/zahtevi"><a id="belo" class="nav-item nav-link" href="#">Zahtevi</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/dodajzivotinju"><a id="belo" class="nav-item nav-link" href="#">Dodaj zivotinju</a></router-link>
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
    name: 'AdminMeni',
    methods:{
    }
  };
</script>