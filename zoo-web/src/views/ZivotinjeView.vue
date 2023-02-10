<template>
    <div class="neka">
        <Zaglavlje></Zaglavlje>
        <Meni></Meni>
        <div class="row zivotinje">
            <div class="col-sm-12" v-for="zivotinja in zivotinje" :key="zivotinja.id">
                <Zivotinja :z="zivotinja"></Zivotinja>
            </div>
        </div>
        <nav class="pag" aria-label="Page navigation example">
        <ul class="pagination">

            <li v-for="index in numpages" :key="index" class="page-item"><a @click="pagin(index-1)" class="page-link" style="color:#252525"  href="#">{{index}}</a></li>

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

export default {
    name:'Zivotinje',
    components:{
        Zaglavlje,
        Meni,
        Zivotinja
    },
    data(){
        return {
            zivotinje: [],
            page:5,
            numpages:0
        }
    },
    methods:{
        pagin(i){
            // alert('from ' + i*5 + ' to ' + (i+1)*5 + 'and pages: ' + this.numpages);
            if(localStorage.getItem('zivotinje')!= null){
            this.zivotinje = JSON.parse(localStorage.getItem('zivotinje'));
            }
            else this.zivotinje = zivotinje;
            this.zivotinje = this.zivotinje.slice(i*5, (i+1)*5);
        }
    },
    mounted(){
        if(localStorage.getItem('zivotinje')!= null){
            this.zivotinje = JSON.parse(localStorage.getItem('zivotinje'));
        }
        else this.zivotinje = zivotinje;

        this.numpages = Math.floor(this.zivotinje.length / 5) + 1;
        this.zivotinje = this.zivotinje.slice(0, 5);
    }
}
</script>