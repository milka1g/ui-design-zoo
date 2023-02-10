<template>
    <div class="skrol">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class='row obavest'>
            <div class='col-sm-12' v-for="obavestenje in obavestenja" :key="obavestenje.id">
                    <Obavestenje :o="obavestenje"></Obavestenje>
            </div>
        </div>
    </div>
</template>

<style>
.obavest{
    background-color: #E0CA3C;
    display: flex;
    justify-content: start;
    min-height: 85.2vh;
}

.skrol{
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'
import Obavestenje from '../components/Obavestenje.vue'
import obavestenja from '../data/obavestenja.js'

export default {
    name:'Obavestenja',
    components:{
        Meni,
        Zaglavlje,
        Obavestenje
    },
    data(){
        return{
            obavestenja:[]
        }
    },
    mounted(){
        if(localStorage.getItem('obavest') == null){
            localStorage.setItem('obavest', JSON.stringify(obavestenja));
            this.obavestenja = obavestenja;
        }
        else{
            this.obavestenja = JSON.parse(localStorage.getItem('obavest'))
        }
        function compare( a, b ) {
            if ( a.status < b.status ){
                return -1;
            }
            if ( a.status > b.status ){
                return 1;
            }
            return 0;
            }
        this.obavestenja = this.obavestenja.sort(compare);
        }
    }
</script>