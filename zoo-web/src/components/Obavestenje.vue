<template>
    <div class="card w-50 ob1">
        <div class="row">
        <div class="col-sm-6 levo">
            <h4>{{ o.naslov }}</h4>
        </div>
        <div class="col-sm-6 desno">
            <h4>{{ o.status }} &nbsp; <img v-if="o.status=='Odobreno'" class="mini" src="../../public/img/check.png"/> <img v-if="o.status=='Na cekanju'" class="mini" src="../../public/img/wait.png"/></h4>
        </div>
        <div class="col-sm-12 levo">
            <div>Sifra: {{ o.sifra }}</div>
        </div>
        <div class="col-sm-12 levo">
            <div>Vrsta: {{ o.vrsta }}</div>
        </div>
        <div class="col-sm-12 levo">
            <div>Tip: {{ o.tip }}</div>
        </div>
        <div class="col-sm-6 levo">
            <div>Kolicina: {{ o.kolicina }}</div>
        </div>
        <div class="col-sm-6 desno" style="padding-bottom: 5px;">
            <div>Ukupno: {{ o.cena }}</div>
        </div>
        </div>
    </div>
</template>

<style>
.mini{
    height: 30px;
}

.levo{
    display: flex;
    justify-content: left;
    padding-left: 30px;
    color: #252525;
}
.desno{
    display: flex;
    justify-content: right;
    padding-right: 30px;
    color: #252525;
}
.ob1{
    margin-top:20px;
    margin-left:20px;
    padding-top: 5px;
    padding-top: 5px;
    background-color: #ece19c;
}

</style>

<script>
export default {
    name:'Obavestenje',
    props:['o']
}
</script>