<template>
    <div class="neka">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class="row zivotinje">
            <div class="col-sm-12" v-for="zivotinja in zivotinje" :key="zivotinja.id">
                <Zivotinja :z="zivotinja"></Zivotinja>
            </div>
        </div>
    </div>
</template>

<style>

.neka{
    overflow-y: hidden;
    overflow-x: hidden;
}

.zivotinje{
    background-color: #A799B7;
    min-height: 85.2vh;
}

</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'
import zivotinje from '../data/zivotinje.js'
import Zivotinja from '../components/Zivotinja.vue'

export default {
    name:'Zivotinje',
    components:{
        Zaglavlje,
        Meni,
        Zivotinja
    },
    data(){
        return {
            zivotinje: zivotinje
        }
    }
}
</script>