<template>
    <div class="card w-50 ob1">
        <div class="col-sm-6 levo">
            <h4>{{ o.naslov }}</h4>
        </div>
        <div class="col-sm-6 levo">
            <div>Sifra: {{ o.sifra }}</div>
        </div>
        <div class="col-sm-6 levo">
            <div>Vrsta: {{ o.vrsta }}</div>
        </div>
        <div class="col-sm-6 levo">
            <div>Tip: {{ o.tip }}</div>
        </div>
        <div class="col-sm-6 levo">
            <div>Kolicina: {{ o.kolicina }}</div>
        </div>
    </div>
</template>

<style>
.levo{
    display: flex;
    justify-content: left;
    padding-left: 10px;
}
.ob1{
    margin-top:20px;
    margin-left:20px;
}

</style>

<script>
export default {
    name:'Obavestenje',
    props:['o']
}
</script>