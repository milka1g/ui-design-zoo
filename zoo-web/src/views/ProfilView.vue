<template>
    <div class="profil">
        <Zaglavlje v-if="korisnik.tip===0"></Zaglavlje>
        <AdminZaglavlje v-if="korisnik.tip===1"></AdminZaglavlje>
        <Meni v-if="korisnik.tip===0"></Meni>
        <AdminMeni v-if="korisnik.tip===1"></AdminMeni>
        <div class="container">
            <div class="row odbi" style="padding-top: 50px;">
                <div class="col-sm-12">
                    <h4>Zdravo, {{ korisnik.kor_ime }}</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 le">
                    <div class="card w-75" style="background-color: #C5BECE;">
                        <div class="row" style="padding-top:10px">
                            <div class="col-sm-12">
                                <h5>Licni podaci</h5>
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-5">
                                <h6>Ime:</h6>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="korisnik.ime">
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-5">
                                <h6>Prezime:</h6>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="korisnik.prezime">
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-5">
                                <h6>Adresa:</h6>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="korisnik.adresa">
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-5">
                                <h6>Telefon:</h6>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="korisnik.telefon">
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-12">
                                <a href="#" class="btn" @click="urediprof()" style="background-color:#E0CA3C">Uredi</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 de">
                        <div class="card w-75" style="background-color: #C5BECE;">
                            <div class="row" style="padding-top:10px">
                                <div class="col-sm-12">
                                    <h5>Promena lozinke</h5>
                                </div>
                            </div>
                            <div class="row odbi">
                                <div class="col-sm-5">
                                    <h6>Stara lozinka:</h6>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="stara_loz" placeholder="Unesite staru lozinku">
                                </div>
                            </div>
                            <div class="row odbi">
                                <div class="col-sm-5">
                                    <h6>Nova lozinka:</h6>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="nova_loz1" placeholder="Unesite novu lozinku">
                                </div>
                            </div>
                            <div class="row odbi">
                                <div class="col-sm-5">
                                    <h6>Stara lozinka:</h6>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control boja" id="exampleInputEmail1" v-model="nova_loz2" placeholder="Unesite ponovo novu lozinku">
                                </div>
                            </div>
                            <div class="row odbi">
                            <div class="col-sm-12" style="padding-top:47px">
                                <a href="#" class="btn" @click="urediloz()" style="background-color:#E0CA3C">Uredi</a>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.le{
    display: flex;
    justify-content: right;
}

.odbi{
    padding-bottom: 10px;
}

.boja{
    color: #3A3A3A;
}

.de{
    display: flex;
    justify-content: left;
}

.profil{
    background-color: #A799B7;
    min-height:100vh;
}
</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import AdminZaglavlje from '../components/AdminZaglavlje.vue'
import Meni from '../components/Meni.vue'
import AdminMeni from '../components/AdminMeni.vue'

export default {
    name:'Profil',
    components:{
        Zaglavlje,
        Meni,
        AdminMeni,
        AdminZaglavlje
    },
    data(){
        return {
            korisnik: {},
            stara_loz:'',
            nova_loz1:'',
            nova_loz2:''   
        }
    },
    methods:{
        urediloz(){
            if(this.stara_loz == this.korisnik.lozinka){
                if(this.nova_loz1 != this.nova_loz2){
                    alert("Nova lozinka vam se razlikuje");
                    return;
                }
                this.korisnik.lozinka = this.nova_loz1;
                localStorage.setItem('korisnik', JSON.stringify(this.korisnik));
                alert("Uspesno promenjena lozinka");
            }
            else 
                alert("Pogresna stara lozinka");
        }  ,
        urediprof(){
            let korisnici = JSON.parse(localStorage.getItem('korisnici'));
            let uredi = korisnici.find(k => k.id == this.korisnik.id);
            uredi = this.korisnik;
            localStorage.setItem('korisnici', JSON.stringify(korisnici));
            localStorage.setItem('korisnik', JSON.stringify(this.korisnik));
            alert("Uspesno sacuvane promene")
        }
    },
    mounted(){
        let kor = JSON.parse(localStorage.getItem("korisnik"));
        this.korisnik = kor;
    }
}
</script>