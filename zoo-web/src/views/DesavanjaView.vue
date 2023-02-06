<template>
    <div class="desavanja">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class='row desavanje'>
            <div class='col-sm-12' v-for="desavanje in desavanja" :key="desavanje.id">
                    <Desavanje :d="desavanje"></Desavanje>
            </div>
        </div>
    </div>
</template>

<style>
.desavanje{
    background-color: #A799B7;
    display: flex;
    justify-content: start;
    min-height: 85.2vh;
}

.desavanja{
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'
import desavanja from '../data/desavanja.js'
import Desavanje from '../components/Desavanje.vue'

export default {
    name:'Desavanja',
    components:{
        Zaglavlje,
        Meni,
        Desavanje
    },
    data(){
        return{
            desavanja: desavanja
        }
    }
}
</script>