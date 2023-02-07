<template>
    <div class="card shadow-none w-75 desavanj">
        <div class="row">
            <div class="col-sm-12  lev">
                <h5>{{ d.naslov }}</h5>
            </div>
            <div class="col-sm-12 lev">
                <h6>{{ d.datum }}</h6>
            </div>
            <div class="col-sm-2 lev" >
                <img :src="'/img/img'+d.slikaid+'.jpg'" alt="" id="ova"  style="height:90px;">
            </div>
            <div class="col-sm-6" style="text-align: left">
                    {{ d.text }}
            </div>
            <div class="col-sm-3"></div>
            <div class="col-sm-1 offset-10" style="padding-right: 0;">
                <img @click="uvecaj(d)" src="../../public/img/likeon.svg" v-if="d.liked==false"  alt="" style="height:35px;">
                <img @click="uvecaj(d)" src="../../public/img/likeoff.svg" v-if="d.liked==true"  alt="" style="height:35px;">
            </div>
            <div class="col-sm-1 ajd" style="padding-left: 0; text-align: left; color: #252525;">
               {{ d.lajkovi }}
            </div>
        </div>
        <hr>
    </div>
</template>

<style>
.card{
    border: none;
}

.nesto{
    padding-top: 10px;
}

.ajd{
    display: flex;
    align-items: center;
}

.desn{
    display: flex;
    justify-content: right;
    color: #252525;
}

.desavanj{
    background-color: #A799B7;
    height: 20%;
}

#ova {
  border-radius: 6%;
}

.lev{
    display: flex;
    text-align: left;
    padding-left: 30px;
    color: #252525;
}
</style>

<script>
export default {
    name:'Desavanje',
    props:['d'],
    methods:{
        uvecaj(d){
            if(d.liked){
                d.lajkovi--;
                d.liked = false;
            }
            else{
                d.lajkovi++;
                d.liked = true;
            }
        }
    }
}
</script>