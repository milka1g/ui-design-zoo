<template>
  <div>
  <PrijavaZaglavlje></PrijavaZaglavlje>
  <div class="prijavaview">
    <div id="sred">
    <form>
    <div class="form-group">
      <div class="col text-start">
        <label style="color:#3A3A3A">Korisnicko ime</label>
        <input v-model='korisnicko_ime' type="name" class="form-control" aria-describedby="emailHelp" placeholder="Unesite korisnicko ime">
      </div>
    </div>
    <br>
    <div class="form-group">
      <div class="col text-start">
        <label style="color:#3A3A3A">Lozinka</label>
        <input v-model='lozinka' type="password" class="form-control" placeholder="Unesite lozinku">
    </div>
    </div>
    <br>
    <button type="submit" style="background-color:#E0CA3C" class="btn" @click="prijava()">Prijavi se</button>
  </form>
  </div>
  </div>
</div>
</template>

<style>

.prijavaview{
 background-color: #A799B7;
 display: flex;
 justify-content: center;
 align-items: center;
  text-align: center;
  min-height: 91.8vh;
}

#levo{
  justify-content: left;
}

</style>

<script>
import korisnici from '../data/korisnici.js'
import PrijavaZaglavlje from '../components/PrijavaZaglavlje.vue'

export default {
  name: 'HomeView',
  data(){
    return{
      korisnicko_ime: '',
      lozinka: '',
      korisnici:[]
    }
  },
  components:{
    PrijavaZaglavlje
  },
  methods:{
    prijava(){
      if(localStorage.getItem('korisnici') != null)
        this.korisnici = JSON.parse(localStorage.getItem('korisnici'));
       else 
          this.korisnici = korisnici;

      let korisnik = this.korisnici.find(kor=> kor.kor_ime==this.korisnicko_ime && kor.lozinka==this.lozinka);
      if(korisnik==null){
        alert("Neispravno korisnicko ime i/ili lozinka");
        return;
      }
      localStorage.setItem('korisnik', JSON.stringify(korisnik))
      if(korisnik.tip==1){
        //admin
        this.$router.push('adminpocetna')
      } else {
        this.$router.push('pocetna')
      }
    }
  },
  mounted(){
        if(localStorage.getItem('korisnici') == null)
          localStorage.setItem('korisnici', JSON.stringify(korisnici));
        if(localStorage.getItem('korisnik')!=null){
            let korisnik = JSON.parse(localStorage.getItem('korisnik'));
            if(korisnik.tip==1){
            //admin
            this.$router.push('adminpocetna')
            } else {
              this.$router.push('pocetna')
            }
        }
    }
}
</script>
