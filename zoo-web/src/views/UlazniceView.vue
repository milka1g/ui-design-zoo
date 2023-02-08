<template>
    <div class="ulaznice">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
    </div>
</template>

<style>

</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'

export default {
    name:'Ulaznice',
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