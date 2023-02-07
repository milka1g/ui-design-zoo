<template>
    <div class="card shadow-none w-50 zivotinja">
        <div class="row">
            <div class="col-sm-3 dz">
                    {{ z.naziv }} <br> {{ z.latnaziv }}
            </div>
            <div class="col-sm-3 dz">
                <img :src="''+z.slika" alt="" style="height:100px; width:150px; border-radius: 8%;">
            </div>
            <div class="col-sm-3 dz align-items-end">
                <button type="button" class="btn" style="background-color:#E0CA3C">Opsirnije...</button>
            </div>
            </div>
            <hr>
    </div>
</template>

<style>

.zivotinja{
    background-color: #A799B7;
    height: 20%;
    padding: 10px 10px;
}

.woo{
    padding-bottom: 30px;
}

.klasas{
    justify-content: left;
    display: flex;
    align-items: flex-end;
    height:40px;
}

.dz{
    display: flex;
    /* justify-content: left; */
    text-align: left;
}

</style>

<script>
export default {
    name:'Zivotinja',
    props:['z'],
    methods:{

    }
}
</script>