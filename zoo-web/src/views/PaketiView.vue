<template>
    <div class="skrol">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class='row paketi'>
            <div class='col-lg-3' v-for="paket in paketi" :key="paket.id">
                    <Paket v-bind:p="paket"></Paket>
            </div>
        </div>
    </div>
</template>

<style>

.paketi{
    background-color: #A799B7;
    display: flex;
    justify-content: center;
    align-items: center;
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
import paketi from '../data/paketi.js'
import Paket from '../components/Paket.vue'

export default {
    name: 'PocetnaView',
    components: {
        Zaglavlje,
        Meni,
        Paket
    },
    data(){
        return{
            paketi: paketi
        }
    }
}
</script>