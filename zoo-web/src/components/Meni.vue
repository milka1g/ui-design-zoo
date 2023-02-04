<template>
    <nav id="meni" class="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/"><a id="belo" class="nav-item nav-link" href="#">Paketi</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/"><a id="belo" class="nav-item nav-link" href="#">Pocetna</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/"><a id="belo" class="nav-item nav-link" href="#">Obavestenja</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/"><a id="belo" class="nav-item nav-link" href="#">Desavanja</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/"><a id="belo" class="nav-item nav-link" href="#">Zivotinje</a></router-link> <div style="align-self: center">|</div>
            <router-link id="razmak" style="font-weight: normal; text-decoration: none; color: inherit;" to="/"><a id="belo" class="nav-item nav-link" href="#">Kontakt</a></router-link>
          </div>
          <div style="padding-right:5px">
            <button type="button" class="btn btn-warning">Ulaznice</button>
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

#navbarNav{
  justify-content: space-between;
}
</style>

<script>
  export default {
    name: 'Meni'
  };
</script>