<template>
    <div class="neka">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class="row zivotinje">
            <div class="col-sm-12" v-for="zivotinja in zivotinje" :key="zivotinja.id">
                <Zivotinja v-if="zivotinja.id < page && zivotinja.id > page-5" :z="zivotinja"></Zivotinja>
            </div>
        </div>
        <nav class="pag" aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span style="color:#252525"  aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li class="page-item"><a @click="pagin(1)" class="page-link" style="color:#252525"  href="#">1</a></li>
            <li class="page-item"><a @click="pagin(2)" class="page-link" style="color:#252525"  href="#">2</a></li>
            <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span style="color:#252525" aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
</nav>
    </div>
</template>

<style>

.neka{
    overflow-y: hidden;
    overflow-x: hidden;
}

.pag{
    display: flex;
    justify-content: center;
    background-color: #A799B7;
}

.zivotinje{
    background-color: #A799B7;
    min-height: 73vh;
}

</style>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'
import Meni from '../components/Meni.vue'
import zivotinje from '../data/zivotinje.js'
import Zivotinja from '../components/Zivotinja.vue'
import { IPv4 } from 'ipaddr.js'

export default {
    name:'Zivotinje',
    components:{
        Zaglavlje,
        Meni,
        Zivotinja
    },
    data(){
        return {
            zivotinje: zivotinje,
            page:5
        }
    },
    methods:{
        pagin(i){
            this.page = 5 * i;
            // alert(this.page)
        }
    }
}
</script>