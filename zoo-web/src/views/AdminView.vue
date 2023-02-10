<template>
    <div class="adminpocetak">
        <AdminZaglavlje></AdminZaglavlje>
        <AdminMeni></AdminMeni>
        <div class="container-fluid up">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card w-100" style="background-color: #C5BECE;">
                        <div class="row">
                            <div class="col-sm-12">
                                <h4>Zdravo, {{ korisnik.ime }}</h4>
                            </div>
                        </div>
                        <div class="row odbi">
                            <div class="col-sm-12">
                                <h4>Mozes pogledati zahteve za ulaznicama na stranici 'Zahtevi' ili dodati novu zivotinju na stranici 'Dodaj zivotinju'</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="/img/yookeper.png" alt="" style="height:300px">
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

.adminpocetak{
    min-height: 100vh;
    background-color: #A799B7;

}

.visina{
    min-height: 250px;
    background-color: #ffda73;
}

.odbi{
    padding:10px;
}

.up{
    padding-top: 50px;
    min-height: 100vh;
    background-color: #A799B7;
    justify-content: center;
}

.spejs{
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.pocetnaOpcije{
    background-color:#E0CA3C ;
    overflow-y: hidden;
    overflow-x: hidden;
}

</style>

<script>
import AdminZaglavlje from '../components/AdminZaglavlje.vue'
import AdminMeni from '../components/AdminMeni.vue'

export default {
    name: 'AdminView',
    components: {
        AdminZaglavlje,
        AdminMeni
    },
    data(){
        return {
            korisnik:{}
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
