<template>
    <div class="zahtevi">
        <AdminZaglavlje></AdminZaglavlje>
        <AdminMeni></AdminMeni>
        <div v-if="zahtevi.length == 0" style="padding-top:20px"  class="zah">
            <h3>Nemate zahteva, mozete produziti dalje</h3>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12" v-for="zahtev in zahtevi" :key="zahtev.id">
                    <div class="card w-50 zahtevcic">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="row" style="text-align: left;padding-bottom: 10px; padding-left: 10px;"> 
                                    <div class="col-sm-12">
                                        <h4>{{ zahtev.naslov }}</h4>
                                    </div>
                                    <div class="col-sm-12">
                                        <div>Korisnik: {{ zahtev.korisnik.ime }} &nbsp; {{ zahtev.korisnik.prezime }}</div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div>Sifra: {{ zahtev.sifra }}</div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div>Vrsta: {{ zahtev.vrsta }}</div>
                                    </div>
                                    <div class="col-sm-12 ">
                                        <div>Tip: {{ zahtev.tip }}</div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div>Kolicina: {{ zahtev.kolicina }}</div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div>Ukupno: {{ zahtev.cena }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row" style="text-align: right; padding-top: 10px; padding-right: 10px;">
                                    <div class="col-sm-3 offset-6">
                                        <a href="#" class="btn" @click="prihvati(zahtev)" style="background-color:#4BB543">Prihvati</a>
                                    </div>
                                    <div class="col-sm-3">
                                        <a href="#" class="btn" @click="odbij(zahtev)" style="background-color:#FC100D ">Odbij</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
</template>

<style>
.zahtevcic{
    margin: 10px;
}

.pocetnaview{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.visina{
    min-height: 250px;
    background-color: #ffda73;
}
.mini{
    height: 30px;
}

.up{
    padding-top: 50px;
    min-height: 43.5vh;
    justify-content: center;
}

.spejs{
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.zahtevi{
    background-color:#E0CA3C ;
    overflow-y: hidden;
    overflow-x: hidden;
    min-height: 100vh;
}

</style>

<script>
import AdminZaglavlje from '../components/AdminZaglavlje.vue'
import AdminMeni from '../components/AdminMeni.vue'

export default {
    name: 'ZahteviView',
    components: {
        AdminZaglavlje,
        AdminMeni
    },
    data(){
        return{
            zahtevi:[]
        }
    },
    methods:{
        prihvati(zahtev){
            let zahtevi = []
            if(localStorage.getItem('obavest')!=null){
                zahtevi = JSON.parse(localStorage.getItem('obavest'));
            }

            let zahtevu = zahtevi.find(z => z.sifra == zahtev.sifra);
            zahtevu.status = 'Odobreno'
            localStorage.setItem('obavest', JSON.stringify(zahtevi));
            this.zahtevi = this.zahtevi.filter(z => z.sifra != zahtev.sifra);
            // alert("pruihvatam" + zahtev.sifra)
        },  
        odbij(zahtev){
            let zahtevi = []
            if(localStorage.getItem('obavest')!=null){
                zahtevi = JSON.parse(localStorage.getItem('obavest'));
            }

            let zahtevu = zahtevi.find(z => z.sifra == zahtev.sifra);
            zahtevu.status = 'Odbijeno'
            localStorage.setItem('obavest', JSON.stringify(zahtevi));
            this.zahtevi = this.zahtevi.filter(z => z.sifra != zahtev.sifra);
            // alert("odbijam" + zahtev.sifra)
        }
    },
    mounted(){
        if(localStorage.getItem('korisnik')!=null){
            let korisnik = JSON.parse(localStorage.getItem('korisnik'));
            if(korisnik.tip==0){
              this.$router.push('pocetna')
            }
        }
        if(localStorage.getItem('obavest')!=null){
            let zahtevi = JSON.parse(localStorage.getItem('obavest'));
            this.zahtevi = zahtevi.filter(z => z.status == 'Na cekanju');
        }
    }
}
</script>
