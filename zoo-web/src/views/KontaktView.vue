<template>
    <div class="kontakt">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class="container-fluid">
            <div class="row boja1">
                test
            </div>
            <div class="row boja2">
                test2
            </div>
        </div>
    </div>
</template>

<style>
.boja1{
    background-color: #A799B7;
    min-height: 40vh;
}

.boja2{
    background-color: #E0CA3C;
    min-height: 40vh;
}
</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'

export default {
    name:'Kontakt',
    components:{
        Zaglavlje,
        Meni
    },
    data(){
        return {
            
        }
    }
}
</script>