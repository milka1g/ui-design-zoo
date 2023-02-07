<template>
    <div class="profil">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
    </div>
</template>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'

export default {
    name:'Profil',
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