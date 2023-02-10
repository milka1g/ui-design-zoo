<template>
    <div class="dodajziv">
        <Zaglavlje v-if="korisnik.tip===0"></Zaglavlje>
        <AdminZaglavlje v-if="korisnik.tip===1"></AdminZaglavlje>
        <Meni v-if="korisnik.tip===0"></Meni>
        <AdminMeni v-if="korisnik.tip===1"></AdminMeni>
        <div class="container-fluid odbitak" style="display: flex; justify-content: center;">
                    <div class="card w-75" style="background-color: #C5BECE;">
                        <div class="row" style="padding-top:10px">
                            <div class="col-sm-12">
                                <h5>Nova zivotinja</h5>
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-3 offset-3" style="text-align: left;">
                                <h6>Naziv:</h6>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="naziv">
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-3 offset-3">
                                <h6>Latinski naziv:</h6>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="latnaziv">
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-3 offset-3">
                                <h6>Slika:</h6>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                <input class="form-control" type="file" id="formFile" v-on:change="onFileChange">
                                </div>
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-3 offset-3">
                                <h6>Opis:</h6>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <textarea class="form-control" v-model="opis" style="width:450px" id="exampleFormControlTextarea1" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row odbi">
                            <div class="col-sm-12">
                                <a href="#" class="btn" @click="dodajzivotinju()" style="background-color:#E0CA3C">Dodaj</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<style>
.pocetnaview{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.odbitak{
    padding-top:10vh;
}
.visina{
    min-height: 250px;
    background-color: #ffda73;
}

.odbi{
    padding: 10px;
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

.dodajziv{
    background-color:#A799B7  ;
    overflow-y: hidden;
    overflow-x: hidden;
    min-height: 100vh;
}

</style>

<script>
import AdminZaglavlje from '../components/AdminZaglavlje.vue'
import AdminMeni from '../components/AdminMeni.vue'
import zivotinje from '../data/zivotinje.js'

export default {
    name: 'DodajZivotinjuView',
    components: {
        AdminZaglavlje,
        AdminMeni
    },
    data(){
        return {
            korisnik: {},
            naziv:'',
            latnaziv:'',
            slika:'',
            id:Math.floor(Math.random() * 10000+10),
            opis:''
        }
    },  
    methods:{
        dodajzivotinju(){
            let ziv = {
                id: this.id,
                naziv: this.naziv,
                opis: this.opis,
                latnaziv: this.latnaziv,
                slika: '/img/' + this.slika,
                slikaopis: '/img/' + this.slika
            }
            let zivuljke = []
            if(localStorage.getItem('zivotinje') != null){
                zivuljke = JSON.parse(localStorage.getItem('zivotinje'));
            }
            else 
                zivuljke = zivotinje;
            
            zivuljke.push(ziv);
            localStorage.setItem('zivotinje', JSON.stringify(zivuljke));
            alert('Uspesno ste dodali zivotinju: ' + ziv.naziv)
        },
        onFileChange(e){
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.slika = files[0].name;
        }
    },
    mounted(){
        if(localStorage.getItem('korisnik')!=null){
            let korisnik = JSON.parse(localStorage.getItem('korisnik'));
            this.korisnik = korisnik;
            if(korisnik.tip==0){
              this.$router.push('pocetna')
            }
        }
    }
}
</script>
