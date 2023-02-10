<template>
    <div class="container-fluid zivuljka" style="padding:0">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class="row poz">
            <div class="col-sm-12 alajn" style="text-align: center;">
                <h4>{{ zivotinja.naziv }}</h4>
            </div>
            <div class="col-sm-12 alajn2" style="color:#252525">
                <h6>{{ zivotinja.latnaziv }}</h6>
            </div>
            <div class="col-sm-3">
                <img :src=zivotinja.slikaopis alt="" style="height:250px; border-radius: 10px;">
            </div>
            <div class="col-sm-3">
                <div class="card">
                <div class="card-body" style=" text-align: justify; color:#252525">
                    {{ zivotinja.opis }}
                </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="comments"  v-for="kom in komentari" :key="kom.id">
                    <div class="row levo">
                        <div class="col-sm-12">
                            <table>
                                <tr>
                                    {{ kom.ime }}
                                </tr>
                                <tr  style="color:#252525">
                                    {{ kom.komentar }}
                                </tr>
                            </table>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <textarea class="form-control" v-model="comm" style="width:450px" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                </div>
                <div class="row dugm">
                    <div class="col-sm-3">
                        <button type="button" @click="komentarisi()" class="btn" style="background-color:#E0CA3C;">Komentarisi</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.dugm{
    display: flex;
    justify-content: right;
    padding-top: 10px;

}

.btn {
    text-transform: unset !important;
}
.poz{
    display: flex;
    justify-content: center;
    background-color: #A799B7;
    min-height: 85.2vh;
}

.alajn{
    display: flex;
    align-items: end;
    justify-content: center;
}

.alajn2{
    display: flex;
    align-items: start;
    justify-content: center;
}



.zivuljka{
    overflow-y: hidden;
    overflow-x: hidden;
}

.levo{
    text-align: left;
}

</style>


<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'
import zivotinje from '../data/zivotinje.js'

export default {
    name:'Zivotinja',
    components:{
        Zaglavlje,
        Meni
    },
    data(){
        return {
            myid:0,
            zivotinja:{},
            zivotinje:[],
            komentari:[
                {   
                    id: 0,
                    ime: 'Pera Zdera',
                    komentar: 'Pa bas vam i nije neki korkodil ovo'
                },
                {
                    id: 1,
                    ime: 'Mare Car',
                    komentar: 'Deluje mi neuhranjeno, normalno kad sve neka sitna deca idu u zoo vrt'
                }
            ],
            comm:''
        }
    },
    mounted(){
        this.myid = Number(this.$route.params.id);
        if(localStorage.getItem('zivotinje')!= null){
            this.zivotinje = JSON.parse(localStorage.getItem('zivotinje'));
        }
        else this.zivotinje = zivotinje;
        this.zivotinja = this.zivotinje.find(z => z.id == this.myid);

        // alert(this.zivotinja.naziv);
    },
    methods:{
        komentarisi(){
            let korisnik = JSON.parse(localStorage.getItem('korisnik'));
            let komentar = {
                id: this.komentari[this.komentari.length-1]+1,
                ime:  korisnik.ime + " " + korisnik.prezime,
                komentar: this.comm
            };
            this.komentari.push(komentar);
            this.comm = '';
        }
    }
}
</script>