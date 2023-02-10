<template>
    <div class="ulaznice">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class="container">
            <div class="row odbi" style="padding-top: 50px;color:#252525">
                <div class="col-sm-12">
                    <h4>Ulaznice</h4>
                </div>
            </div>
            <div class="row" style="color:#252525">
                <div class="col-sm-12">
                    <div class="card w-100" style="background-color: #C5BECE;">
                        <div class="row" style="padding-top:10px">
                            <div class="col-sm-6">
                                <div class="row odbi">
                                    <div class="col-sm-6">
                                        Vrsta karte
                                    </div>
                                    <div class="col-sm-6">
                                        <select style="width:150px" v-model="vrsta" :disabled="disabled==true">
                                            <option selected="selected" value="Pojedinacna">Pojedinacna</option>
                                            <option value="Grupna">Grupna</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row odbi">
                                    <div class="col-sm-6">
                                        Tip karte
                                    </div>
                                    <div class="col-sm-6">
                                        <select  v-model="tip" style="width:150px;" :disabled="disabled==true">
                                            <option value="Odrasli">Odrasli</option>
                                            <option value="Deca" selected >Deca</option>
                                            <option value="Skolarci">Skolarci</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row odbi">
                                    <div class="col-sm-6">
                                        Kolicina
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="number" v-model="kolicina" name="tentacles" min="1" max="100" style="width:150px" >
                                    </div>
                                </div>
                                <div class="row odbi">
                                    <div class="col-sm-6">
                                        Cena/kom
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="fname">{{cena}}din</label>
                                    </div>
                                </div>
                                <div class="row odbi">
                                    <div class="col-sm-6">
                                        Promo kod
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" id="fname" name="fname" v-model="promo" style="width:150px">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-12" style="padding-top:20px">
                                        <h5>Ukupno: {{ ukupno }} RSD</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12" style="padding-top:20px">
                                        <a href="#" class="btn" @click="kupi()" style="background-color:#E0CA3C">Zavrsi kupovinu</a>
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

.ulaznice{
    background-color: #A799B7;
    min-height:100vh;
}
</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'

export default {
    name:'Ulaznice',
    props:{
        disabled: {
            default: false,
            type: Boolean
        }
    },
    components:{
        Zaglavlje,
        Meni
    },
    data(){
        return {
            vrsta:'',
            tip:'',
            kolicina:0,
            cena:500,
            promo:'',
            ukupno:0,
            promoCodes:["promo1", "promo2"]
        }
    },
    methods:{
        kupi(){
            let korisnik = JSON.parse(localStorage.getItem('korisnik'));
            let toadd = {
                    id:Math.floor(Math.random() * 10000+10),
                    naslov:'Kupovina ' + new Date().toJSON().slice(0, 10),
                    sifra: "sifra"+Math.floor(Math.random() * 11),
                    vrsta: this.vrsta,
                    tip: this.tip,
                    kolicina: this.kolicina,
                    cena: this.ukupno,
                    status: 'Na cekanju',
                    korisnik: korisnik
                };
            let obavestenja = [];
            if(localStorage.getItem('obavest') != null){
                obavestenja = JSON.parse(localStorage.getItem('obavest'));
                obavestenja.push(toadd)
            }
            else
            obavestenja = [toadd]

            let zahtevi = [];
            if(localStorage.getItem('zahtevi')!=null){
                zahtevi = JSON.parse(localStorage.getItem('zahtevi'));
                zahtevi.push(toadd);
            } else
                zahtevi = [toadd];

            localStorage.setItem('zahtevi', JSON.stringify(zahtevi));
            localStorage.setItem('obavest', JSON.stringify(obavestenja));
            alert("Uspesno ste zahtevali kupovinu. Sacekajte da vam admin odobri");
        }
    },
    mounted(){
        this.vrsta = "Pojedinacna";
        this.tip = "Odrasli";
        this.kolicina = 1;
    },
    watch:{
        vrsta:function(){
            if(this.vrsta == 'Pojedinacna')
            this.cena = 500;
            else
            this.cena = 400;
            this.ukupno = this.cena * this.kolicina;
        },
        tip:function(){
            if(this.tip == 'Skolarci')
            this.cena = 350;
            else if (this.tip == 'Deca')
            this.cena = 300;
            else 
            this.cena = 500;
            this.ukupno = this.cena * this.kolicina;
        },
        promo:function(){
            if(this.promoCodes.includes(this.promo)){
                this.cena -= 100
                this.ukupno = this.cena * this.kolicina;
            }
        },
        kolicina:function(){
            this.ukupno = this.cena * this.kolicina;
        }
    }
}
</script>